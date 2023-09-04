import {Input} from "./Input";
import RenderWithTranslation from "../../test/renderWithTranslation";
import {BgEnum} from "../../const/BgEnum";

describe("<Input/>", () => {
  test("should to defined input", () => {
    const { getByDisplayValue, getByPlaceholderText } = RenderWithTranslation(
      <Input placeholder="placeholder" theme={BgEnum.BG_COLOR} value={"Username"} />
    );
    expect(getByDisplayValue("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  })
})