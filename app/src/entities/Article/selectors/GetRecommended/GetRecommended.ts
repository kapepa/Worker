import {StateSchema} from "../../../../app/providers/Store";

const GetRecommended = (state: StateSchema) => state.recommendedArticle;

export {GetRecommended};