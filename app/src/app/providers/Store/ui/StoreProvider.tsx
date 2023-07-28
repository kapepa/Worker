import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {AppState, CreateReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";

interface StoreProviderProps {
  children: ReactNode,
  preloadedState?: StateSchema,
  getState?: (state: AppState) => void,
}

const StoreProvider: FC<StoreProviderProps> = ({children, preloadedState,getState }) => {
  const store = CreateReduxStore(preloadedState);
  if(!!getState) getState(store.getState());

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export {StoreProvider};