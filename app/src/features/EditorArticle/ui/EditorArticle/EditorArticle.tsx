import {ChangeEvent, FC, memo, useCallback, useMemo, useRef} from "react";
import "./EditorArticle.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {InputDynamic} from "../../../../widgets/InputDynamic";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {ArticleFormType} from "../../model/types/ArticleFormType";
import {ImageDynamic} from "../../../../widgets/ImageDynamic";
import {TypeDynamic} from "../../../../widgets/TypeDynamic";
import {EditorBlocks} from "../EditorBlocks/EditorBlocks";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {EditorArticleActions} from "../../model/slice/editorArticleSlice";
import {ArticleBlocks, ArticleTypesKey} from "../../../../entities/Article/model/types/articleType";
import {EditorArticleState} from "../../model/types/EditorArticleState";

interface EditorArticleProps {
  className?: string,
  isEdit: boolean,
  record: EditorArticleState["record"],
  sendCallback: () => void,
}
const EditorArticle: FC<EditorArticleProps> = memo((props) => {
  const refForm = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation("editor");
  const {className, isEdit, record, sendCallback} = props;
  const {
    setTitle,
    setSubtitle,
    setImg ,
    setType,
    setBlocks,
  } = EditorArticleActions;
  const methods = useForm<ArticleFormType>({
    defaultValues: record
  });

  const getTitle: string = useMemo(() => {
    return isEdit ? t("title.edit") : t("title.create");
  },[t, isEdit]);

  const getBtnText: string = useMemo(() => {
    return isEdit ? t("submit.edit") : t("submit.create");
  }, [t, isEdit]);

  const onChangeArticle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const name = target.name as keyof ArticleFormType;
    const value = target.value;

    switch (name) {
      case "title": dispatch(setTitle(value));
        break;
      case "subtitle": dispatch(setSubtitle(value));
        break;
    }
  }, [dispatch, setTitle, setSubtitle]);

  const loadImageArticle = useCallback((file: File) => {
    dispatch(setImg(file));
  }, [dispatch, setImg]);

  const onToggleType = useCallback((type: ArticleTypesKey[]): void => {
    dispatch(setType(type))
  }, [dispatch, setType]);

  const onToggleBlocks = useCallback(() => {
    const getBlocks: ArticleBlocks[] | undefined = methods.getValues("blocks") as ArticleBlocks[];
    const blocks = JSON.parse(JSON.stringify(getBlocks));
    dispatch(setBlocks(blocks));
  }, [dispatch, setBlocks, methods]);

  const onSubmit: SubmitHandler<ArticleFormType> = useCallback((data: ArticleFormType) => {
    refForm.current?.reset();
    // methods.reset();
    sendCallback();
  }, [refForm, methods, sendCallback])

  return (
    <div className={ClassNames("editor-article", className)}>
      <Text theme={TextTheme.PRIMARY} title={getTitle} />
      <FormProvider {...methods}>
        <form ref={refForm} className="editor-article__form" onSubmit={methods.handleSubmit(onSubmit)}>
          {isEdit && <InputDynamic
            name="id"
            type="text"
            className="editor-article__input--hidden"
            validation={{ required: { value: true, message: "" } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />}
          <InputDynamic
            name="title"
            type="text"
            label={t("label.title")}
            placeholder={t("placeholder.title")}
            classInput="editor-article__input"
            validation={{ required: { value: true, message: t("required.title") }, minLength: { value: 3, message: t("minLength.title") } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />
          <InputDynamic
            name="subtitle"
            type="text"
            label={t("label.subtitle")}
            placeholder={t("placeholder.subtitle")}
            classInput="editor-article__input"
            validation={{ required: { value: true, message: t("required.subtitle") }, minLength: { value: 3, message: t("minLength.subtitle") } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />
          <ImageDynamic
            name="img"
            loadImage={loadImageArticle}
            validation={{ required: { value: true, message: t("required.img") } }}
          />
          <TypeDynamic
            name="type"
            label={t("label.type")}
            validation={{ required: { value: true, message: t("required.type") } }}
            onToggleType={onToggleType}
          />
          <EditorBlocks
            label={t("label.blocks")}
            theme={BgEnum.BG_COLOR}
            onToggleBlocks={onToggleBlocks}
          />
          <Button
            theme={ThemeButtonEnum.OUTLINE}
            type="submit"
            role="submit"
            // disabled={loading}
          >{getBtnText}</Button>
        </form>
      </FormProvider>
    </div>
  )
})

export {EditorArticle}