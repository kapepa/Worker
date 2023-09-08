import {render} from '@testing-library/react'
import {Card} from "./Card";
import {BgEnum} from "../../const/BgEnum";

describe("<Card/>", () => {
  test("should be return card with content", () => {
    const mockContent = "Content";
    const { getByText } = render(<Card theme={BgEnum.BG_COLOR_INVERTED}>{mockContent}</Card>)

    expect(getByText(mockContent)).toBeInTheDocument();
  })
})