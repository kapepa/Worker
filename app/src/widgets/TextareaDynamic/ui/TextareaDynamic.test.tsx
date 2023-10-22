import RenderWithForm from "../../../shared/test/renderWithForm";
import {TextareaDynamic} from "./TextareaDynamic";
import {BgEnum} from "../../../shared/const/BgEnum";

describe("<TextareaDynamic/>", () => {
  const mockValue = "Mock text";

  test("should be defined", () => {
    const { getByDisplayValue } = RenderWithForm(
      <TextareaDynamic
        theme={BgEnum.BG_COLOR}
        name="text"
        validation={{ "required": { "value": true, "message": "Text is required" }}}
      />,
      {defaultValues: { text: mockValue }}
    )

    expect(getByDisplayValue(mockValue)).toBeInTheDocument();
  })
})