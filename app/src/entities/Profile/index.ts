import {ProfileActions, ProfileReducer} from "./model/slice/profileSlice";
import {ProfileState} from "./model/types/profileState";
import {ProfileTypes} from "./model/types/profileTypes";
import {ProfileRequest} from "./services/ProfileRequest/ProfileRequest";
import {GetProfile} from "./selectors/GetProfile/GetProfile";
import {GetProfileData} from "./selectors/GetProfileData/GetProfileData";
import {GetProfileLoading} from "./selectors/GetProfileLoading/GetProfileLoading";
import {GetProfileError} from "./selectors/GetProfileError/GetProfileError";
import {GetProfileAvatar} from "./selectors/GetProfileAvatar/GetProfileAvatar";
import {ProfileCard} from "./ui/ProfileCard/ProfileCard";

export {
  ProfileActions,
  ProfileReducer,
  ProfileRequest,
  GetProfile,
  GetProfileError,
  GetProfileData,
  GetProfileLoading ,
  GetProfileAvatar,
  ProfileCard
};
export type { ProfileState, ProfileTypes }