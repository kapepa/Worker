import {createSelector} from "@reduxjs/toolkit";
import {GetRecommended} from "../GetRecommended/GetRecommended";
import {RecommendedState} from "../../model/types/recommendedState";

const GetRecommendedIds = createSelector(
  GetRecommended,
  (state: RecommendedState) => state.ids,
)

export {GetRecommendedIds}