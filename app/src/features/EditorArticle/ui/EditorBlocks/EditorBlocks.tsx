import {FC, memo, MouseEvent, useCallback, useEffect, useMemo, useState} from "react";
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
import {BgEnum} from "../../../../shared/const/BgEnum";
import {useFieldArray, Control} from "react-hook-form";
import {ArticleFormType} from "../../model/types/ArticleFormType";

interface EditorBlocks {
  className?: string,
  label: string,
  theme: BgEnum,
  control: Control<ArticleFormType>
}

const EditorBlocks: FC<EditorBlocks> = memo(({className, label, theme, control}) => {
  const {t} = useTranslation("editor");
  const [blocks, setBlocks] = useState<ArticleBlocks[]>([]);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "blocks"
  });

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

    append(getBlock);
  }, [blocks]);

  const onRemoveBlock = useCallback((index: number) => {
    remove(index);
  }, [blocks, setBlocks]);

  const renderBlocks = useMemo(() => {
    return blocks.map((block: ArticleBlocks, index: number) => {
      switch (block.type) {
        case ArticleBlockType.TEXT:
          return <EditorText
            key={`${block.type}-${index}`}
            index={index}
            onRemove={onRemoveBlock}
            theme={theme}
            {...block}
          />;
        case ArticleBlockType.CODE:
          return <EditorCode
            key={`${block.type}-${index}`}
            index={index}
            onRemove={onRemoveBlock}
            theme={theme}
            control={control}
            {...block}
          />;
        case ArticleBlockType.IMAGE:
          return <EditorImage
            key={`${block.type}-${index}`}
            index={index}
            onRemove={onRemoveBlock}
            control={control}
            {...block}
          />;
      }
    })
  }, [blocks, onRemoveBlock]);

  useEffect(() => {
    setBlocks(fields)
  },[fields, setBlocks]);

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