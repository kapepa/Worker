import {ArticlesBlocks} from "../../articles/interfaces/articles.interface";
import {ArticlesBlockType} from "../../articles/interfaces/blocks.interface";

export const MockBlocks: ArticlesBlocks = {
  id: "mockID",
  type: ArticlesBlockType.CODE,
  code: "<p className='MockClass'>Hellow</p>",
}