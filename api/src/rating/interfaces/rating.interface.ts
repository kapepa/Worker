import {UsersEntityInterfaces} from "../../users/interfaces/users.interfaces";
import {ArticlesInterface} from "../../articles/interfaces/articles.interface";

export interface RatingInterface {
  id?: string,
  rate: number,
  text?: string,
  users?: UsersEntityInterfaces,
  articles?: ArticlesInterface,
  profile?: UsersEntityInterfaces,
  createdAt?: Date;
}