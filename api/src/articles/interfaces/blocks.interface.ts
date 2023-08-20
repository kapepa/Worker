import {ArticlesInterface} from "./articles.interface";
import {UsersEntityInterfaces} from "../../users/interfaces/users.interfaces";

export enum ArticlesBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

interface ArticlesBlockBase {
  id: string,
  type: ArticlesBlockType,
  articles?: ArticlesInterface,
  users?: UsersEntityInterfaces,
}

export interface BlocksCodeInterface extends ArticlesBlockBase{
  code: string,
}

export interface BlocksImageInterface extends ArticlesBlockBase{
  src: string,
  title?: string,
}

export interface BlocksTextInterface extends ArticlesBlockBase{
  title?: string,
  paragraphs: string[]
}
