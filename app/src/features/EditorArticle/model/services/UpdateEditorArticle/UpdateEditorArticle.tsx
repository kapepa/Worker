import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../../utils/axios";
import {ArticleBlocks, ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {StateSchema} from "../../../../../app/providers/Store";
import {AxiosResponse} from "axios";
import {GetEditorArticleRecord} from "../../selectors/GetEditorArticleRecord/GetEditorArticleRecord";
import {ArticleBlockType} from "../../../../../entities/Article/model/types/articleBlock";
import {ToForm} from "../../../../../utils/toForm";
import {GetEditorArticleEdit} from "../../selectors/GetEditorArticleEdit/GetEditorArticleEdit";
import {ArticleFormType} from "../../types/ArticleFormType";

const UpdateEditorArticle = createAsyncThunk<ArticleType, undefined, { rejectWithValue: string, state: StateSchema }>(
  'editorArticle/UpdateEditorArticle',
  async (props, thunkAPI) => {
    const record = GetEditorArticleRecord(thunkAPI.getState());
    const edit = GetEditorArticleEdit(thunkAPI.getState());
    const blocksImage = ( blocks: ArticleBlocks[], origin: ArticleBlocks[] ) => {
      return Promise.all(blocks.map((block: ArticleBlocks, index: number)  => {
        return new Promise(async (resolve) => {
          const oldName: ArticleBlocks = origin[index];
          if(block.type === ArticleBlockType.IMAGE && "src" in block  && typeof block.src !== "string" && "src" in oldName) {
            const record: AxiosResponse<string> = await Axios.post("/api/file/record", ToForm({file: block.src, remove: oldName.src}));
            resolve({...block, src: record.data});
          }
          resolve(block)
        })
      }))
    }
    const articleImage = async (article: Partial<ArticleType> | Partial<ArticleFormType>, origin: ArticleType | ArticleFormType | undefined) => {
      let img = article.img;
      if(typeof img !== "string" && origin?.img) img = await Axios.post("/api/file/record", ToForm({file: img, remove: origin.img}));
      return {...article, img}
    }

    try {
      let article = await articleImage(record, edit);
      let blocks;
      if(!!record.blocks && !!record.blocks.length && edit && !!edit.blocks)
        blocks = await blocksImage(record.blocks, edit?.blocks)
      const toForm = ToForm({...article, blocks});

      const response: AxiosResponse<ArticleType> = await Axios.patch('/api/articles/update', toForm);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error-update-article");
    }
  }
);

export {UpdateEditorArticle};