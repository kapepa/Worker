import {ChangeEvent, FC, memo, useCallback, useMemo} from "react";
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

interface EditorArticleProps {
  className?: string,
  isEdit: boolean,
}
const EditorArticle: FC<EditorArticleProps> = memo(({className, isEdit}) => {
  const {t} = useTranslation("editor");
  const methods = useForm<ArticleFormType>({
    defaultValues: {},
  });

  const getTitle: string = useMemo(() => {
    return isEdit ? t("title.edit") : t("title.create");
  },[t, isEdit]);

  const getBtnText: string = useMemo(() => {
    return isEdit ? t("submit.edit") : t("submit.create");
  }, [t, isEdit]);

  const onChangeArticle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
  }, [])
  const onSubmit: SubmitHandler<ArticleFormType> = (data: ArticleFormType) => console.log(data)

  return (
    <div className={ClassNames("editor-article", className)}>
      <Text theme={TextTheme.PRIMARY} title={getTitle} />
      <FormProvider {...methods}>
        <form className="editor-article__form" onSubmit={methods.handleSubmit(onSubmit)}>
          <InputDynamic
            name="id"
            type="id"
            className="editor-article__input--hidden"
            validation={{ required: { value: true, message: "" } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />
          <InputDynamic
            name="title"
            type="title"
            label={t("label.title")}
            placeholder={t("placeholder.title")}
            classInput="editor-article__input"
            validation={{ required: { value: true, message: t("required.title") }, minLength: { value: 3, message: t("minLength.title") } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />
          <InputDynamic
            name="subtitle"
            type="subtitle"
            label={t("label.subtitle")}
            placeholder={t("placeholder.subtitle")}
            classInput="editor-article__input"
            validation={{ required: { value: true, message: t("required.subtitle") }, minLength: { value: 3, message: t("minLength.subtitle") } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />
          <ImageDynamic/>

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