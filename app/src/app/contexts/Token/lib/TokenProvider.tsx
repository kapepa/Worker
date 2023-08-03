import {FC, memo, ReactNode, useCallback, useEffect} from "react";
import {LOCAL_STORAGE_TOKEN, TokenContext} from "./TokenContext";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions, GetAuth} from "../../../../features/AuthByUsername";
import Axios from "../../../../utils/axios";
import {MyselfUsers, UsersActions} from "../../../../entities/Users";
import {AppDispatch} from "../../../providers/Store/config/store";

interface TokenProviderProps {
  children: ReactNode,
}

const TokenProvider: FC<TokenProviderProps> = memo(({children}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cleanUsers } = UsersActions;
  const { token } = useSelector(GetAuth);
  const { cleanToken } = AuthActions;

  const setAxiosToken = (bearer: string | undefined) => {
    if(!!bearer) {
      Axios.interceptors.request.use(function (config) {
        config.headers['Authorization'] = `Bearer ${bearer}`;
        return config;
      }, null, { synchronous: true });
    } else {
      Axios.interceptors.request.clear();
    }
  }

  const setToken = useCallback(() => {
    if(!!token){
      window.localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      setAxiosToken(token);
      dispatch(MyselfUsers())
    };
  },[token, dispatch])

  const getToken = useCallback(() => {
    const bearer = window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if(!!bearer){
      setAxiosToken(bearer);
      dispatch(MyselfUsers())
    }
  }, [dispatch])

  const logout = useCallback(() => {
    dispatch(cleanToken());
    dispatch(cleanUsers());
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN)
  }, [dispatch, cleanToken, cleanUsers])

  useEffect(() => {
    if(!!token) setToken();
  },[token, setToken])

  useEffect(() => {
    getToken()
  })

  return (
    <TokenContext.Provider value={{logout}}>
      {children}
    </TokenContext.Provider>
  )
})

export {TokenProvider};