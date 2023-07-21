import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {CreateReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";

interface StoreProviderProps {
  children: ReactNode,
  preloadedState?: StateSchema,
}

const StoreProvider: FC<StoreProviderProps> = ({children, preloadedState}) => {
  const store = CreateReduxStore(preloadedState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export {StoreProvider};