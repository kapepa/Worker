import {FC, memo, useCallback, useMemo} from "react";
import "./CommentsList.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetComments} from "../../selectors/GetComments/GetComments";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import Loader from "../../../../shared/ui/Loader/Loader";
import {CommentsCard} from "../CommentsCard/CommentsCard";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton";
import {SkeletonShape} from "../../../../shared/const/SkeletonShape";

interface CommentsListProps {
  className?: string,
}

const CommentsList: FC<CommentsListProps> = memo( ({className}) => {
  const {t} = useTranslation("comments")
  const {data, error, loading} = useSelector(GetComments);

  const ShowComments = useCallback( ( comment: CommentsTypes, index: number ) => {
    return <CommentsCard key={`${comment.id}-${index}`} comment={comment}/>
  }, []);

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

  if(!data && loading) {
    return (
      <div className="comments-list comments-list--loading">
        <Loader/>
      </div>
    )
  }

  return (
    <div className={ClassNames("comments-list", className)} data-testid="comments-list">
      {!!data?.length ?
        data?.map(ShowComments) :
        <Text theme={TextTheme.PRIMARY} align={TextAlign.CENTER} text={t("comments-empty")} />
      }
      {(!!data?.length && loading) && SkeletonComments}
    </div>
  )
})

export {CommentsList};