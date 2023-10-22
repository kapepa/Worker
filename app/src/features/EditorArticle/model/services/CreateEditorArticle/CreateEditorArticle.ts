import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleBlocks, ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {StateSchema} from "../../../../../app/providers/Store";
import Axios from "../../../../../utils/axios";
import {GetEditorArticleRecord} from "../../selectors/GetEditorArticleRecord/GetEditorArticleRecord";
import {ToForm} from "../../../../../utils/toForm";
import {ArticleBlockType} from "../../../../../entities/Article/model/types/articleBlock";
import {AxiosResponse} from "axios";

const CreateEditorArticle = createAsyncThunk<ArticleType, undefined, { rejectValue: string, state: StateSchema }>(
  'editorArticle/CreateEditorArticle',
  async (props: undefined, thunkAPI) => {
    const blocksImage = ( blocks: ArticleBlocks[] ) => {
      return Promise.all(blocks.map((block: ArticleBlocks)  => {
        return new Promise(async (resolve) => {
          if(block.type === ArticleBlockType.IMAGE && "src" in block) {
            const record: AxiosResponse<string> = await Axios.post("/api/file/record", ToForm({file: block.src}));
            resolve({...block, src: record.data});
          }
          resolve(block)
        })
      }))
    }

    const record = GetEditorArticleRecord(thunkAPI.getState());
    let blocks;
    if(!!record.blocks && record.blocks.length) blocks = await blocksImage(record.blocks);
    const toForm = ToForm({...record, blocks});

    try {
      const response = await Axios.post(
        "/api/articles/create/art",
        toForm,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error-create-article");
    }
  }
);

export {CreateEditorArticle};