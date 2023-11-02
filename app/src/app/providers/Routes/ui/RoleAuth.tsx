import {useSelector} from "react-redux";
import {GetUsersRoles} from "../../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../../../shared/const/Routers";

const RoleAuth = (props: any) => {
  // const { ADMIN } = useSelector(GetUsersRoles);
  // console.log(ADMIN)
  // if(!ADMIN) {
  //   const navigate = useNavigate();
  //   navigate(RouterPath.HOME);
  //   return false;
  // }
  console.log(props)
  return false;
}

export {RoleAuth}