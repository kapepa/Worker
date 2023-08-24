import {render} from '@testing-library/react'
import {Image} from "./Image";

describe("<Image/>", () => {
  test("should be defined", () => {
    const {getByTestId, getByAltText} = render(<Image src="images.png" alt="img_alt" />);

    expect(getByTestId("image")).toBeInTheDocument();
    expect(getByAltText("img_alt")).toBeInTheDocument();
  })
})