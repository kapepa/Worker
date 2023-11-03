import {ArticlesBlocks, ArticlesInterface} from "../../articles/interfaces/articles.interface";
import {CommentsInterfaces} from "../../comments/interfaces/comments.interfaces";
import {Role} from "../enum/role.enum";
import {NoticeInterface} from "../../notice/interfaces/notice.interface";

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
  notice?: NoticeInterface[],
  isActive?: boolean,
}