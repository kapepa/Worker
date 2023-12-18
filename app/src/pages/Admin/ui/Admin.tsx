import {FC, memo, useLayoutEffect} from "react";
import "./Admin.scss"
import {useSelector} from "react-redux";
import {GetUsersRoles} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../../shared/const/Routers";
import {Flex} from "../../../shared/ui/Flex/Flex";

const Admin: FC = memo(() => {
  const navigate = useNavigate();
  const { ADMIN } = useSelector(GetUsersRoles);

  useLayoutEffect(() => {
    if(!ADMIN) navigate(RouterPath.HOME);
  },[navigate, ADMIN])

  return (
    <Flex
      data-testid="admin"
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