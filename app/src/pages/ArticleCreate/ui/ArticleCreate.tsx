import {FC, memo} from "react";
import "./ArticleCreate.scss";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {EditorArticle} from "../../../features/EditorArticle";

const ArticleCreate: FC = memo(() => {
  return (
    <Scroll>
      <EditorArticle isEdit={false}/>
    </Scroll>
  )
});

export {ArticleCreate};