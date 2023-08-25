import {FC, memo} from "react";
import "./CommentsCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface CommentsCardProps {
  className?: string,
  comment: CommentsTypes,
}

const CommentsCard: FC<CommentsCardProps> = memo(({className, comment}) => {
  const { text, users } = comment;
  return (
    <div className={ClassNames("comments-card", className)} data-testid="comments-card">
      <div>{users.firstname}</div>
      <Text theme={TextTheme.PRIMARY} text={text} />
    </div>
  )
})

export {CommentsCard}