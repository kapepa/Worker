import {FC, memo, useEffect} from "react";
import "./Admin.scss"
import {useSelector} from "react-redux";
import {GetUsersRoles} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../../shared/const/Routers";
import {Flex} from "../../../shared/ui/Flex/Flex";

const Admin: FC = memo(() => {
  const navigate = useNavigate();
  const { ADMIN } = useSelector(GetUsersRoles);

  useEffect(() => {
    if(!ADMIN) navigate(RouterPath.HOME);
  },[navigate, ADMIN])

  return (
    <Flex
      className="admin"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      Admin
    </Flex>
  )
})

export {Admin}