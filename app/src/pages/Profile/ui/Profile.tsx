import {FC, useEffect} from "react";
import "./Profile.scss";
import {GetProfile, ProfileCard, ProfileRequest} from "../../../entities/Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";

const Profile: FC = function () {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(GetProfile);

  useEffect(() => {
    if(!data?.id) dispatch(ProfileRequest());
  },[dispatch, data?.id]);

  return (
    <div className="profile" data-testid="profile">
      <ProfileCard/>
    </div>
  )
}

export { Profile };