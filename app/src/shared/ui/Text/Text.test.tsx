import {render} from '@testing-library/react';
import {Text, TextTheme} from "./Text";

describe("<Text/>", () => {
  const mockTitle: string = "Lorem ipsum dolor sit amet.";
  const mockText: string = "Curabitur ut enim placerat.";

  test("should be to have title and text", () => {
    const {getByText} = render(<Text theme={TextTheme.PRIMARY} title={mockTitle} text={mockText}/>);
    expect(getByText(mockTitle)).toBeInTheDocument();
    expect(getByText(mockText)).toBeInTheDocument();
  })

  test("should be to have title", () => {
    const {getByText} = render(<Text theme={TextTheme.PRIMARY} title={mockTitle}/>);
    expect(getByText(mockTitle)).toBeInTheDocument();
  })

  test("should be to have text", () => {
    const {getByText} = render(<Text theme={TextTheme.PRIMARY} text={mockText}/>);
    expect(getByText(mockText)).toBeInTheDocument();
  })
})