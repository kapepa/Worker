import {RtkApi} from "../../../shared/api/rtk.api";

const RatingApi = RtkApi.enhanceEndpoints({
  endpoints: {
    getArticles () {
      console.log("aaaaaa")
      return ""
    }
  }
})

export {RatingApi};