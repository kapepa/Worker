import {FC, memo, useCallback, useEffect} from "react";
import "./ArticleEdit.scss";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {useParams} from "react-router-dom";
import {
  EditorArticle,
  EditorArticleActions,
  FetchEditorArticle,
  GetEditorArticleError,
  GetEditorArticleLoading, GetEditorArticleRecord, UpdateEditorArticle
} from "../../../features/EditorArticle";
import {Text, TextTheme} from "../../../shared/ui/Text/Text";
import Loader from "../../../shared/ui/Loader/Loader";
import {useTranslation} from "react-i18next";

const ArticleEdit: FC = memo(() => {
  let { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation("editor");
  const {setIdArticle} = EditorArticleActions;
  const error = useSelector(GetEditorArticleError);
  const loading = useSelector(GetEditorArticleLoading);
  const record = useSelector(GetEditorArticleRecord);

  useEffect(() => {
   if(!!id){
     dispatch(setIdArticle(id));
     dispatch(FetchEditorArticle());
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendCallback =  useCallback(() => {
    dispatch(UpdateEditorArticle());
  }, [dispatch, UpdateEditorArticle]);

  if(!!error) {
    return (
      <Text
        theme={TextTheme.PRIMARY}
        title={t(error)}
        className="article-edit__frame"
      />
    )
  }

  if(loading) {
    return (
      <div className="article-edit__frame">
        <Loader />
      </div>
    )
  }

  return (
    <Scroll>
      <EditorArticle
        isEdit={true}
        record={record}
        sendCallback={sendCallback}
      />
    </Scroll>
  )
})

export {ArticleEdit}