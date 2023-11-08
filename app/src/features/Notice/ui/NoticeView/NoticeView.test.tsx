import ComponentRender from "../../../../shared/test/componentRender";
import {NoticeView} from "./NoticeView";
import NoticeJSON from "../../../../shared/test/mock/notice.json";
import {fireEvent} from "@testing-library/react";
import {NoticeState} from "../../model/types/notice.state";
import Axios from "../../../../utils/axios";

describe("NoticeView", () => {
  let StateNotice: NoticeState = {
    ids: [],
    entities: {},
    error: undefined,
    loading: false,
  }

  test("should be error", () => {
    let getNotice = jest.spyOn(Axios, "get");

    let {getByTestId, debug} = ComponentRender(
        <NoticeView/>,
        { reloadedState: {
          notice: StateNotice
        }
      }
    )

    fireEvent.click(getByTestId("ico-img"))
    debug()
  })
})