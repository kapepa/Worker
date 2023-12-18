import {render} from '@testing-library/react';
import {BasicRating} from "./BasicRating";

describe("<BasicRating />", () => {
  const childrenInner: string = "Rating";
  const errorText: string = "Some error";

  test("should be rating", () => {
    const {getByText} = render(<BasicRating children={childrenInner} loading={false} />);
    expect(getByText(childrenInner)).toBeInTheDocument();
  })

  test("should be loading", () => {
    const {getByTestId} = render(<BasicRating children={childrenInner} loading={true} />);
    expect(getByTestId("loader")).toBeInTheDocument();
  })

  test("should be error", () => {
    const {getByText} = render(<BasicRating children={childrenInner} loading={false} error={errorText} />);
    expect(getByText(errorText)).toBeInTheDocument();
  })
})