import {FC, memo, useCallback, useMemo, useState} from "react";
import "./CommentsList.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useDispatch, useSelector} from "react-redux";
import {GetComments} from "../../selectors/GetComments/GetComments";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import Loader from "../../../../shared/ui/Loader/Loader";
import {CommentsCard} from "../CommentsCard/CommentsCard";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton";
import {SkeletonShape} from "../../../../shared/const/SkeletonShape";
import {commentsActions, getCommentsAdapter} from "../../model/slice/commentsSlice";
import {GetUsersProfile} from "../../../Users";
import {Notification} from "../../../../widgets/Notification";
import {NotificationEnum} from "../../../../shared/const/NotificationEnum";
import {CommentRemove} from "../../model/types/commentRemove";
import {GetCommentRemove} from "../../selectors/GetCommentRemove/GetCommentRemove";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {DeleteCommentById} from "../../services/DeleteCommentById/DeleteCommentById";

interface CommentsListProps {
  className?: string,
}

const CommentsList: FC<CommentsListProps> = memo( ({className}) => {
  const {t} = useTranslation("comments");
  const dispatch = useDispatch<AppDispatch>();
  const getCommentRemove = useSelector(GetCommentRemove);
  const [isOpen, setOpen] = useState<boolean>(false);
  const profile = useSelector(GetUsersProfile);
  const {error, loading} = useSelector(GetComments);
  const data = useSelector(getCommentsAdapter.selectAll);
  const { removeComment } = commentsActions;

  const onCloseNotification = useCallback(() => {
    dispatch(removeComment(undefined));
    setOpen(false);
  }, [dispatch, setOpen, removeComment]);

  const onDeleteComments = useCallback((props: CommentRemove) => {
    dispatch(removeComment(props));
    setOpen(prevState => !prevState)
  }, [dispatch, removeComment]);

  const confirmedRemove = useCallback(() => {
    if(getCommentRemove) {
      setOpen(false);
      dispatch(DeleteCommentById(getCommentRemove?.comment.id));
    }
  }, [getCommentRemove])

  const ShowComments = useCallback(( data: CommentsTypes, index: number ) => {
    const isOwner = profile?.id === data.users.id;
    return (
      <CommentsCard
        index={index}
        key={`${data.id}-${index}`}
        comment={data}
        isOwner={isOwner}
        onDelete={onDeleteComments}
      />
    )
  }, [profile?.id, onDeleteComments]);

  const SkeletonComments = useMemo(() => {
    return Array(8).fill({}).map((_, index: number) => {
      return <div key={`skeleton-${index}`} className="comments-list__skeleton-cell">
        <div className="comments-list__skeleton-top">
          <Skeleton shape={SkeletonShape.Circle} className="comments-list__skeleton-avatar"/>
          <Skeleton shape={SkeletonShape.Square} className="comments-list__skeleton-name"/>
        </div>
        <Skeleton shape={SkeletonShape.Square} className="comments-list__skeleton-comment"/>
      </div>
    })
  }, [])

  if(!!error) {
    return (
      <div className="comments-list comments-list--error">
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("error-comments")}
        />
      </div>
    )
  }

  if(!data?.length && loading) {
    return (
      <div className="comments-list comments-list--loading">
        <Loader/>
      </div>
    )
  }

  return (
    <>
      <Notification
        onConfirmed={confirmedRemove}
        onClose={onCloseNotification}
        isOpen={isOpen}
        text={t("delete-comment")}
        type={NotificationEnum.Attention}
      />
      <div className={ClassNames("comments-list", className)} data-testid="comments-list">
        {!!data?.length ?
          data.map(ShowComments) :
          <Text theme={TextTheme.PRIMARY} align={TextAlign.CENTER} text={t("comments-empty")} />
        }
        {(!!data?.length && loading) && SkeletonComments}
      </div>
    </>
  )
})

export {CommentsList};