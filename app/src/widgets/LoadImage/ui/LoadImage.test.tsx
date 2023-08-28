import {render} from '@testing-library/react';
import {LoadImage} from "./LoadImage";

describe("<LoadImage/>", () => {
  const mockImg = "https://teknotower.com/wp-content/uploads/2020/11/js.png";

  test("should be defined", () => {
    const { getByAltText } = render(<LoadImage><img src={mockImg} alt={"image"}/></LoadImage>)
    expect((getByAltText("image"))).toBeInTheDocument()
  })
})