import {FC, memo} from "react";
import "./CommentsCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";

interface CommentsCardProps {
  className?: string,
  comment: CommentsTypes,
}

const CommentsCard: FC<CommentsCardProps> = memo(({className, comment}) => {
  const { text, users } = comment;
  return (
    <div className={ClassNames("comments-card", className)} data-testid="comments-card">
      <div className="comments-card__header">
        <Avatar className="comments-card__avatar" size={35} src={users.avatar} alt={users.username} symbol={users.username}/>
        <Text theme={TextTheme.PRIMARY} title={users.username}/>
      </div>
      <Text theme={TextTheme.PRIMARY} text={text} />
    </div>
  )
})

export {CommentsCard}