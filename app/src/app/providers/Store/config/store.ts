import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {CounterReducer} from "../../../../entities/Counter";
import {UsersReducer} from "../../../../entities/Users";
import {AuthReducer} from "../../../../features/AuthByUsername";
import {ProfileReducer} from "../../../../entities/Profile";
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {useDispatch} from "react-redux";
import {ToForm} from "../../../../utils/toForm";
import {ArticlesReducer, DetailsReducers, RecommendedReducer} from "../../../../entities/Article";
import {CommentsReducer} from "../../../../entities/Comments";
import {FormCommentReducer} from "../../../../features/FormComment";
import {ScrollReducer} from "../../../../features/ScrollHistory";
import {filterArticlesReducer} from "../../../../features/FilterArticles";
import {EditorArticleReducer} from "../../../../features/EditorArticle";
import {NoticeReducer} from "../../../../features/Notice";
import {RtkApi} from "../../../../shared/api/rtk.api";

// const store = configureStore<StateSchema>({
//   reducer: {
//     counter: CounterReducer,
//     users: UsersReducer,
//     auth: AuthReducer,
//     profile: ProfileReducer,
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
  auth: AuthReducer,
  profile: ProfileReducer,
  details: DetailsReducers,
  comments: CommentsReducer,
  formComment: FormCommentReducer,
  articles: ArticlesReducer,
  scroll: ScrollReducer,
  filterArticles: filterArticlesReducer,
  recommendedArticle: RecommendedReducer,
  editorArticle: EditorArticleReducer,
  notice: NoticeReducer,
  [RtkApi.reducerPath]: RtkApi.reducer,
});

function CreateReduxStore (preloadedState?: StateSchema, navigate?: NavigateFunction) {
  return configureStore({
    reducer: storeReducers,
    preloadedState,
    devTools: true,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<StateSchema>) => getDefaultMiddleware({
      thunk: {
        extraArgument: { navigate, toForm: ToForm },
      },
      serializableCheck: false
    }).concat(RtkApi.middleware),
  });
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppState = ReturnType<typeof storeReducers>;
export type AppDispatch = ReturnType<typeof CreateReduxStore>["dispatch"];
export {CreateReduxStore, storeReducers};


