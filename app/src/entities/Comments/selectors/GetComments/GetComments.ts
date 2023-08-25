import {StateSchema} from "../../../../app/providers/Store";

const GetComments = (state: StateSchema) => state.comments;

export {GetComments}