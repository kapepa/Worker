import {BgInputEnum, ColorInputEnum, Input} from "./Input";
import RenderWithTranslation from "../../test/renderWithTranslation";

describe("<Input/>", () => {
  test("should to defined input", () => {
    const { getByText, getByPlaceholderText } = RenderWithTranslation(
      <Input label="username" placeholder="placeholder" theme={BgInputEnum.WHITE_BG} color={ColorInputEnum.WHITE_COLOR}/>
    );
    expect(getByText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  })
})