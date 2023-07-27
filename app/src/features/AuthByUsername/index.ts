import {LoginModal} from "./ui/LoginModal/LoginModal";
import {LoginTypes} from "./model/types/loginTypes";
import {AuthActions, AuthReducer} from "./model/slice/authSlice";
import {AuthState} from "./model/types/AuthState";
import {GetAuth} from "./model/selectors/getAuth/getAuth";
import {GetLogin} from "./model/selectors/getLogin/getLogin";

export {LoginModal, AuthActions, AuthReducer, GetAuth, GetLogin};
export type {LoginTypes, AuthState};