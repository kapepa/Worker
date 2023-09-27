import {FC, memo} from "react";
import "./EditorArticle.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface EditorArticleProps {
  className?: string,
  isEdit: boolean,
}
const EditorArticle: FC<EditorArticleProps> = memo(({className}) => {
  return (
    <div className={ClassNames("editor-article", className)}>
      EditorArticle
    </div>
  )
})

export {EditorArticle}