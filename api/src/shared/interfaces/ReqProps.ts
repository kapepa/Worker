import {UsersDto} from "../../users/dto/users.dto";

export interface ReqProps extends Request {
  user: UsersDto;
}