import {FC, useCallback, useEffect, useRef} from "react";
import "./Profile.scss";
import {GetProfile, ProfileCard, ProfileHeader, ProfileRequest} from "../../../entities/Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";

const Profile: FC = function () {
  const refSend = useRef<HTMLButtonElement>(null)
  const dispatch = useDispatch<AppDispatch>();
  const { data, edit, loading, error, readonly } = useSelector(GetProfile);

  const onSend = useCallback(() => {
    if(refSend.current) refSend.current.click();
  }, [refSend]);

  useEffect(() => {
    if(!data?.id) dispatch(ProfileRequest());
  },[dispatch, data?.id]);

  return (
    <div className="profile" data-testid="profile">
      {!!data && <ProfileHeader onSend={onSend} />}
      <ProfileCard
        edit={edit}
        profile={data}
        isLoading={loading}
        error={error}
        readonly={readonly}
        refSend={refSend}
      />
    </div>
  )
}

export { Profile };