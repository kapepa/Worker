import {render} from "@testing-library/react";
import {BgInputEnum, ColorInputEnum, Input} from "./Input";
import RenderWithTranslation from "../../test/renderWithTranslation";

describe("<Input/>", () => {
  test("should to defined input", () => {
    const { getByText, getByPlaceholderText } = RenderWithTranslation(<Input label="name" placeholder="placeholder" theme={BgInputEnum.WHITE_BG} color={ColorInputEnum.WHITE_COLOR}/>)
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  })
})