import {configureStore} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {CounterReducer} from "../../../../entities/Counter";
import {UsersReducer} from "../../../../entities/Users";
import {AuthReducer} from "../../../../features/AuthByUsername";

const store = configureStore<StateSchema>({
  reducer: {
    counter: CounterReducer,
    users: UsersReducer,
    auth: AuthReducer
  },
  devTools: true,
});

function CreateReduxStore (preloadedState?: StateSchema) {
  return {...store, preloadedState};
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {CreateReduxStore};