import {FC, memo, useCallback} from "react";
import "./ArticleCreate.scss";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {CreateEditorArticle, EditorArticle, GetEditorArticleRecord} from "../../../features/EditorArticle";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";

const ArticleCreate: FC = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const record = useSelector(GetEditorArticleRecord);

  const sendCallback =  useCallback(() => {
    dispatch(CreateEditorArticle());
  }, [dispatch]);

  return (
    <Scroll>
      <EditorArticle
        isEdit={false}
        record={record}
        sendCallback={sendCallback}
      />
    </Scroll>
  )
});

export {ArticleCreate};