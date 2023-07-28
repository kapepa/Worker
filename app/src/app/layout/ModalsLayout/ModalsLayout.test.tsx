import { render, screen } from '@testing-library/react';
import ModalsLayout from "./ModalsLayout";

describe("<ModalsLayout/>", () => {
  test("should be defined", () => {
    render(<ModalsLayout children={<div>Children</div>}/>)
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  })
})