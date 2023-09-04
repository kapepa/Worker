import {render} from '@testing-library/react'
import {LoadAvatar} from "./LoadAvatar";

describe("<LoadAvatar/>", () => {
  const mockImg = "https://cdn-icons-png.flaticon.com/512/1088/1088537.png";

  test("should be defined", () => {
    const { getByTestId } = render(<LoadAvatar size={50} alt={"avatar"} symbol={"UseName"} readOnly={false} src={mockImg} onChangeAvatar={() => {} }/>);
    expect(getByTestId("avatar")).toBeInTheDocument();
  })
})