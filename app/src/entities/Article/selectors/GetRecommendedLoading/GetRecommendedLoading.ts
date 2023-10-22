import {createSelector} from "@reduxjs/toolkit";
import {GetRecommended} from "../GetRecommended/GetRecommended";
import {RecommendedState} from "../../model/types/recommendedState";

const GetRecommendedLoading = createSelector(
  GetRecommended,
  (state: RecommendedState) => state.loading,
);

export {GetRecommendedLoading}