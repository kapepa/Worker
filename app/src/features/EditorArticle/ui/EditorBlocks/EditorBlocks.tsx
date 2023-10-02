import {FC, memo, MouseEvent, useCallback, useMemo, useState} from "react";
import "./EditorBlocks.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {
  ArticleBlocImage,
  ArticleBlockCode,
  ArticleBlockText,
  ArticleBlockType
} from "../../../../entities/Article/model/types/articleBlock";
import {ArticleBlocks} from "../../../../entities/Article";
import {EditorText} from "../EditorText/EditorText";
import {EditorCode} from "../EditorCode/EditorCode";
import {EditorImage} from "../EditorImage/EditorImage";

interface EditorBlocks {
  className?: string,
  label: string,
}

const EditorBlocks: FC<EditorBlocks> = memo(({className, label}) => {
  const {t} = useTranslation("editor");
  const [blocks, setBlocks] = useState<ArticleBlocks[]>([
    {"id": "4", "type": ArticleBlockType.CODE, "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"},
    {"id": "22", "type": ArticleBlockType.IMAGE, "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png", "title": "Рисунок 1 - скриншот сайта"},
    {"id": "14", "type": ArticleBlockType.TEXT, "title": "Заголовок этого блока", "paragraphs": ["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.", "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.", "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]}
  ]);

  const appendBlocks = useCallback((type: ArticleBlockType, block?: ArticleBlocks) => {
    const addBlock = (): ArticleBlocks => {
      switch (type) {
        case ArticleBlockType.TEXT :
          return { type: ArticleBlockType.TEXT } as ArticleBlockText;
        case ArticleBlockType.CODE :
          return { type: ArticleBlockType.CODE } as ArticleBlockCode;
        case ArticleBlockType.IMAGE:
          return { type: ArticleBlockType.IMAGE } as ArticleBlocImage;
      }
    }

    return !!block ? block : addBlock();
  }, [blocks, setBlocks]);

  const onCreateBlock = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const name: ArticleBlockType = e.currentTarget.name as ArticleBlockType;
    const getBlock: ArticleBlocks = appendBlocks(name);
    const copyBlocks = JSON.parse(JSON.stringify(blocks));
    copyBlocks.push(getBlock);

    setBlocks(copyBlocks);
  }, [blocks]);

  const onRemoveBlock = useCallback((index: number) => {
    const copyBlocks = JSON.parse(JSON.stringify(blocks));
    copyBlocks.splice(index,1);

    setBlocks(copyBlocks);
  }, [blocks, setBlocks]);

  const renderBlocks = useMemo(() => {
    return blocks.map((block: ArticleBlocks, index: number) => {
      switch (block.type) {
        case ArticleBlockType.TEXT:
          return <EditorText key={`${block.type}-${index}`} index={index} onRemove={onRemoveBlock} {...block}/>;
        case ArticleBlockType.CODE:
          return <EditorCode key={`${block.type}-${index}`} index={index} onRemove={onRemoveBlock} {...block}/>;
        case ArticleBlockType.IMAGE:
          return <EditorImage key={`${block.type}-${index}`} index={index} onRemove={onRemoveBlock} {...block}/>;
      }
    })
  }, [blocks, onRemoveBlock]);

  return (
    <div className={ClassNames("editor-blocks", className)}>
      <div className="editor-blocks__header">
        <label className="editor-blocks__label">{label}</label>
        <div className="editor-blocks__choose">
          <Button
            className="editor-blocks__type"
            theme={ThemeButtonEnum.OUTLINE}
            type="button"
            name={ArticleBlockType.CODE}
            onClick={onCreateBlock}
          >{t("block.code")}</Button>
          <Button
            className="editor-blocks__type"
            theme={ThemeButtonEnum.OUTLINE}
            type="button"
            name={ArticleBlockType.IMAGE}
            onClick={onCreateBlock}
          >{t("block.image")}</Button>
          <Button
            className="editor-blocks__type"
            theme={ThemeButtonEnum.OUTLINE}
            type="button"
            name={ArticleBlockType.TEXT}
            onClick={onCreateBlock}
          >{t("block.text")}</Button>
        </div>
      </div>
      <div className="editor-blocks__body">
        {renderBlocks}
      </div>
    </div>
  )
});

export {EditorBlocks};