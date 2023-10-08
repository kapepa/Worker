import RenderWithForm from "../../../shared/test/renderWithForm";
import {Textarea} from "./Textarea";
import {BgEnum} from "../../const/BgEnum";

describe("<Textarea/>", () => {
  const mockValue = "Mock text";

  test("should be defined", () => {
    const { getByDisplayValue } = RenderWithForm(
      <Textarea
        theme={BgEnum.BG_COLOR}
        name="text"
        defaultValue={mockValue}
      />,
      {defaultValues: { text: mockValue }}
    )

    expect(getByDisplayValue(mockValue)).toBeInTheDocument();
  })
})