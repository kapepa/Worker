import {StoreProvider} from "./ui/StoreProvider";
import {StateSchema} from "./config/StateSchema";
import {CreateReduxStore, storeReducers} from "./config/store";
import {GetFormComment} from "../../../features/FormComment/selectors/getFormComment/getFormComment";

export {StoreProvider, CreateReduxStore, GetFormComment, storeReducers};
export type {StateSchema}