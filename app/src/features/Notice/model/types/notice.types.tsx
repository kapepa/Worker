import {UsersTypes} from "../../../../entities/Users";

export interface NoticeTypes {
  id?: string,
  title?: string,
  description?: string,
  href?: string,
  read?: boolean,
  users?: UsersTypes,
  createdAt?: Date;
}