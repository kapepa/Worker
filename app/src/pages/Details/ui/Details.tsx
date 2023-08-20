import {FC, memo, useEffect} from "react";
import "./Details.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useSelector} from "react-redux";
import {GetUsers} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
// import {useTranslation} from "react-i18next";

const Details: FC = memo(() => {
  // const { t } = useTranslation("details")
  const { profile, loading } = useSelector(GetUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if(!profile?.id && !loading) navigate(RouterPath.HOME);
  }, [profile, loading, navigate]);

  return (
    <div className="details" data-testid="details">
      Details
    </div>
  )
})

export {Details};