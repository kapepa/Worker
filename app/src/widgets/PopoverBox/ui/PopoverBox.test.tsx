import {fireEvent, render} from '@testing-library/react'
import {PopoverBox} from "./PopoverBox";

describe("PopoverBox", () => {
  test("should be defined", () => {
    const mockTextInner: string = "Any html element";
    const mockTextChildren: string = "Some children";
    const {getByText} = render(<PopoverBox innerBtn={<p>{mockTextInner}</p>} children={<div>{mockTextChildren}</div>}/>);

    expect(getByText(mockTextInner)).toBeInTheDocument();
    fireEvent.click(getByText(mockTextInner));
    expect(getByText(mockTextChildren)).toBeInTheDocument()
  })
})