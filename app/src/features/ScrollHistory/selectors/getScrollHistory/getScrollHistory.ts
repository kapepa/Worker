import {StateSchema} from "../../../../app/providers/Store";

const GetScrollHistory = (state: StateSchema) => state.scroll;

export {GetScrollHistory};