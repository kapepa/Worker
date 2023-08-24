import {render} from '@testing-library/react'
import {ViewEye} from "./ViewEye";
import {ColorView} from "../../const/ColorView";

describe("<ViewEye/>", () => {
  test("should be defined", () => {
    const { getByText, getByTestId } = render(<ViewEye theme={ColorView.PrimaryInv} quantity={100}/>)
    expect(getByTestId("view-eye")).toBeInTheDocument();
    expect(getByText(/100/i)).toBeInTheDocument();
  })
})