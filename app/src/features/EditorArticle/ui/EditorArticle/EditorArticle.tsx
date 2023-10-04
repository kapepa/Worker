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
import {TypeDynamic} from "../../../../widgets/TypeDynamic";
import {EditorBlocks} from "../EditorBlocks/EditorBlocks";
import {ArticleBlockType} from "../../../../entities/Article/model/types/articleBlock";
import {ArticleTypesKey} from "../../../../entities/Article/model/types/articleType";

interface EditorArticleProps {
  className?: string,
  isEdit: boolean,
}
const EditorArticle: FC<EditorArticleProps> = memo(({className, isEdit}) => {
  const {t} = useTranslation("editor");
  const methods = useForm<ArticleFormType>({
    defaultValues: {
      title: "Mock test Title",
      subtitle: "Mock test Subtitle!",
      type: [ArticleTypesKey.IT],
      blocks: [
        {"id": "4", "type": ArticleBlockType.CODE, "code": ""},
        {"id": "22", "type": ArticleBlockType.IMAGE, "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png", "title": ""},
        {"id": "14", "type": ArticleBlockType.TEXT, "title": "Заголовок этого блока", "paragraphs": ["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.", "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.", "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]}
      ]
    },
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

  const loadImageArticle = useCallback((file: File) => {
    console.log(file)
  }, [])

  const onSubmit: SubmitHandler<ArticleFormType> = (data: ArticleFormType) => console.log(data)

  return (
    <div className={ClassNames("editor-article", className)}>
      <Text theme={TextTheme.PRIMARY} title={getTitle} />
      <FormProvider {...methods}>
        <form className="editor-article__form" onSubmit={methods.handleSubmit(onSubmit)}>
          {isEdit && <InputDynamic
            name="id"
            type="id"
            className="editor-article__input--hidden"
            validation={{ required: { value: true, message: "" } }}
            onChange={onChangeArticle}
            themeInput={BgEnum.BG_COLOR}
          />}
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
          <ImageDynamic
            name="img"
            loadImage={loadImageArticle}
            validation={{ required: { value: true, message: t("required.img") } }}
          />
          <TypeDynamic
            name="type"
            label={t("label.type")}
            validation={{ required: { value: true, message: t("required.type") } }}
          />
          <EditorBlocks
            label={t("label.blocks")}
            theme={BgEnum.BG_COLOR}
            control={methods.control}
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