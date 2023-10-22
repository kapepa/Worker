import {createSelector} from "@reduxjs/toolkit";
import {GetRecommended} from "../GetRecommended/GetRecommended";
import {RecommendedState} from "../../model/types/recommendedState";

const GetRecommendedEntities = createSelector(
  GetRecommended,
  (state: RecommendedState) => state.entities,
)

export {GetRecommendedEntities};