import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {CounterReducer} from "../../../../entities/Counter";
import {UsersReducer} from "../../../../entities/Users";
import {AuthReducer} from "../../../../features/AuthByUsername";

// const store = configureStore<StateSchema>({
//   reducer: {
//     counter: CounterReducer,
//     users: UsersReducer,
//     auth: AuthReducer
//   },
//   devTools: true,
// });
//
// function CreateReduxStore (preloadedState?: StateSchema) {
//   return {...store, preloadedState};
// }
//
// export type AppState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;
// export {CreateReduxStore};

const storeReducers = combineReducers<StateSchema>({
  counter: CounterReducer,
  users: UsersReducer,
  auth: AuthReducer
});


function CreateReduxStore (preloadedState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: storeReducers,
    preloadedState,
    devTools: true,
  });
}

export type AppState = ReturnType<typeof storeReducers>;
export type AppDispatch = ReturnType<typeof CreateReduxStore>["dispatch"];
export {CreateReduxStore};


