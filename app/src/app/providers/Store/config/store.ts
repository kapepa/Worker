import {configureStore} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {CounterReducer} from "../../../../entities/Counter";


function CreateReduxStore (preloadedState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: CounterReducer,
    },
    preloadedState,
    devTools: true,
  })
}

// export const store = configureStore({
//   reducer: {},
// })
//
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export {CreateReduxStore};