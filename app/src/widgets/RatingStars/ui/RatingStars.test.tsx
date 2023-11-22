import {fireEvent, render} from '@testing-library/react';
import {RatingStars} from "./RatingStars";

describe("<RatingStars/>", () => {
  test("should be defined", () => {
    const {getAllByTestId} = render(<RatingStars/>)

    expect(getAllByTestId("ico-img").length).toEqual(5);
  })

  test("click on stars", () => {
    const mockCounter = jest.fn();
    const {getAllByTestId} = render(<RatingStars countStars={mockCounter}/>);

    const stars = getAllByTestId("ico-img");
    fireEvent.click(stars[0]);
    expect(mockCounter).toHaveBeenCalledWith(1);
  })
})