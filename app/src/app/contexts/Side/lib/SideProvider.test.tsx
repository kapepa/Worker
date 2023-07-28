import { render, screen } from '@testing-library/react';
import {SideProvider} from "../index";

describe("<SideProvider/>", () => {
  test("should be defined", () => {
    render(<SideProvider children={<div>Children</div>}/>)
    expect(screen.getByText(/Children/)).toBeInTheDocument()
  })
})