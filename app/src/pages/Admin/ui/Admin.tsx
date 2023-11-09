import {FC, memo, useEffect} from "react";
import "./Admin.scss"
import {useSelector} from "react-redux";
import {GetUsersRoles} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../../shared/const/Routers";

const Admin: FC = memo(() => {
  const navigate = useNavigate();
  const { ADMIN } = useSelector(GetUsersRoles);

  useEffect(() => {
    if(!ADMIN) navigate(RouterPath.HOME);
  },[navigate, ADMIN])

  return (
    <div className="admin">
      Admin
    </div>
  )
})

export {Admin}