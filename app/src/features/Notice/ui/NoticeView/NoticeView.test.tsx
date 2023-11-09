import ComponentRender from "../../../../shared/test/componentRender";
import {NoticeView} from "./NoticeView";
import {fireEvent, waitFor} from "@testing-library/react";
import {NoticeState} from "../../model/types/notice.state";
import NoticeJSON from "../../../../shared/test/mock/notice.json";
import Axios from "../../../../utils/axios";


describe("NoticeView", () => {
  let StateNotice: NoticeState = {
    ids: [],
    entities: {},
    error: undefined,
    loading: false,
  }

  test("should be received notices", async () => {
    jest.spyOn(Axios, "get").mockResolvedValue({data: [NoticeJSON]})
    let {getByTestId, findByText} = ComponentRender(
        <NoticeView/>,
        { reloadedState: {
          notice: StateNotice
        }
      }
    )

    fireEvent.click(getByTestId("ico-img"));
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(await findByText(NoticeJSON.title)).toBeInTheDocument()
  })

  test("should be error", async () => {
    jest.spyOn(Axios, "get").mockRejectedValue({status: 403});
    let {getByTestId, findByText} = ComponentRender(
      <NoticeView/>,
      { reloadedState: {
          notice: StateNotice
        }
      }
    )

    fireEvent.click(getByTestId("ico-img"));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(await findByText("Error receiving notifications")).toBeInTheDocument()
  })
})