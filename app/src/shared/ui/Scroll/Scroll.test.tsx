import {render} from '@testing-library/react';
import {Scroll} from "./Scroll";

describe("<Scroll/>", () => {
  test("should be defined", () => {
    const { getByTestId, getByText } = render(<Scroll><div>Node</div></Scroll>);
    expect(getByTestId("scroll")).toBeInTheDocument();
    expect(getByText(/Node/i)).toBeInTheDocument();
  })
})