import {FC, memo, useCallback} from "react";
import "./CommentsList.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetComments} from "../../selectors/GetComments/GetComments";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import Loader from "../../../../shared/ui/Loader/Loader";
import {CommentsCard} from "../CommentsCard/CommentsCard";
import {CommentsTypes} from "../../model/types/commentsTypes";

interface CommentsListProps {
  className?: string,
}

const CommentsList: FC<CommentsListProps> = memo( ({className}) => {
  const {t} = useTranslation("comments")
  const {data, error, loading} = useSelector(GetComments);

  const ShowComments = useCallback( ( comment: CommentsTypes, index: number ) => {
    return <CommentsCard key={`${comment.id}-${index}`} comment={comment}/>
  }, []);

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
      {!!data && data?.map(ShowComments)}
    </div>
  )
})

export {CommentsList};