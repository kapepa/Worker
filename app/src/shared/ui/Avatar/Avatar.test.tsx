import {render} from '@testing-library/react';
import {Avatar} from "./Avatar";
import Img from "../../assets/img/avatar-face.jpg"

describe("<Avatar/>", () => {
  test("should load image", () => {
    const { getByTestId, getByAltText } = render(<Avatar api={false} src={Img} alt={"avatar"} size={40} symbol={"t"}/>)
    expect(getByTestId("avatar")).toBeInTheDocument();
    expect(getByAltText(/avatar/i)).toBeInTheDocument();
  })

  test("should load symbol", () => {
    const { getByTestId, getByText, debug } = render(<Avatar api={false} src={undefined} alt={"avatar"} size={40} symbol={"t"}/>)
    expect(getByTestId("avatar")).toBeInTheDocument();
    expect(getByText(/t/i)).toBeInTheDocument();
  })
})