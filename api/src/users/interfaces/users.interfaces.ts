import {ArticlesBlocks, ArticlesInterface} from "../../articles/interfaces/articles.interface";
import {CommentsInterfaces} from "../../comments/interfaces/comments.interfaces";
import {Role} from "../enum/role.enum";

export interface UsersEntityInterfaces {
  id?: string,
  username?: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  password?: string,
  avatar?: string,
  country?: string,
  city?: string,
  roles?: Role[]
  articles?: ArticlesInterface[],
  blocks?: ArticlesBlocks[]
  comments?: CommentsInterfaces[],
  isActive?: boolean,
}