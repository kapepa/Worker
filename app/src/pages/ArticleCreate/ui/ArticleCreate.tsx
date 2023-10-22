import {FC, memo, useCallback} from "react";
import "./ArticleCreate.scss";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {
  CreateEditorArticle,
  EditorArticle,
  GetEditorArticleError,
  GetEditorArticleLoading,
  GetEditorArticleRecord
} from "../../../features/EditorArticle";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {Text, TextTheme} from "../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import Loader from "../../../shared/ui/Loader/Loader";

const ArticleCreate: FC = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation("editor");
  const record = useSelector(GetEditorArticleRecord);
  const error = useSelector(GetEditorArticleError);
  const loading = useSelector(GetEditorArticleLoading);

  const sendCallback =  useCallback(() => {
    dispatch(CreateEditorArticle());
  }, [dispatch]);

  if(!!error) {
    return (
      <Text
        theme={TextTheme.PRIMARY}
        title={t(error)}
        className="article-create__frame"
      />
    )
  }

  if(loading) {
    return (
      <div className="article-create__frame">
        <Loader />
      </div>
    )
  }

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