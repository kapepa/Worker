import {Input} from "./Input";
import RenderWithTranslation from "../../test/renderWithTranslation";
import {BgInputEnum} from "../../const/BgInput";

describe("<Input/>", () => {
  test("should to defined input", () => {
    const { getByDisplayValue, getByPlaceholderText } = RenderWithTranslation(
      <Input placeholder="placeholder" theme={BgInputEnum.WHITE_BG} value={"Username"} />
    );
    expect(getByDisplayValue("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  })
})