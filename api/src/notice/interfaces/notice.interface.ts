import {UsersEntityInterfaces} from "../../users/interfaces/users.interfaces";

export interface NoticeInterface {
  id: string,
  title: string,
  description: string,
  href: string,
  read: boolean,
  users: UsersEntityInterfaces,
  createdAt?: Date;
}
