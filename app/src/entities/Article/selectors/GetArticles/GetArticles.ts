import {StateSchema} from "../../../../app/providers/Store";

const GetArticles = (state: StateSchema) => state.articles;

export { GetArticles };