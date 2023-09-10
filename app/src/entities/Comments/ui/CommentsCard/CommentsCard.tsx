import {FC, memo, useCallback} from "react";
import "./CommentsCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import {RouterPath} from "../../../../shared/const/Routers";
import XClose from "../../../../shared/ui/XClose/XClose";
import {CommentRemove} from "../../model/types/commentRemove";

interface CommentsCardProps {
  index: number
  className?: string,
  onDelete: (props: CommentRemove) => void,
  comment: CommentsTypes,
  isOwner: boolean,
}

const CommentsCard: FC<CommentsCardProps> = memo(({index, className, comment, onDelete, isOwner}) => {
  const { text, users } = comment;

  const onClickDelete = useCallback(() => {
    onDelete({ index, comment: { ...comment, users } });
  }, [index, comment, onDelete, users])

  return (
    <div className={ClassNames("comments-card", className)} data-testid="comments-card">
      <div className="comments-card__header">
        <AppLink to={`${RouterPath.PROFILE}/${users.id}`} className="comments-card__info">
          <Avatar className="comments-card__avatar" size={35} src={users.avatar} alt={users.username} symbol={users.username}/>
          <Text theme={TextTheme.PRIMARY} title={users.username}/>
        </AppLink>
        {isOwner && <XClose className="comments-card__remove" color={"PRIMARY_COLOR"} onClick={onClickDelete} />}
      </div>
      <Text theme={TextTheme.PRIMARY} text={text} />
    </div>
  )
})

export {CommentsCard}