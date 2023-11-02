import {Countries} from "../../../../shared/const/Countries";
import {Role} from "../../../Users";

export interface ProfileTypes {
  id?: string,
  username?: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  password?: string,
  avatar?: string | File,
  country?: Countries,
  roles?: Role[],
  city?: string,
  isActive?: boolean,
}

export type ProfileKeyTypes = keyof ProfileTypes;