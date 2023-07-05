import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe("<Button />", () => {

  test("Should be render", () => {
    render(<Button />);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });

  test("should be to have className and text", () => {
    const mockText: string = "SomeText";
    const mockClass: string = "some-class";
    render(<Button className={mockClass}>{mockText}</Button>);
    expect(screen.getByTestId("button")).toHaveClass(mockClass);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  })

})

