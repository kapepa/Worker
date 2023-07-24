import {StateSchema} from "../../../../app/providers/Store";

const GetUsers = (state: StateSchema) => state.users;

export {GetUsers};