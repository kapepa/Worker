import {Countries} from "../../../../shared/const/Countries";

export interface UsersTypes {
  id: string,
  username: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  password?: string,
  avatar?: string | File,
  country?: Countries,
  city?: string,
}