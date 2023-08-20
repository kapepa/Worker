import {ArticlesInterface} from "../../articles/interfaces/articles.interface";
import {UsersEntityInterfaces} from "../../users/interfaces/users.interfaces";

export interface CommentsInterfaces {
  id?: string,
  text: string,
  articles?: ArticlesInterface,
  users?: UsersEntityInterfaces,
  createdAt?: Date;
}