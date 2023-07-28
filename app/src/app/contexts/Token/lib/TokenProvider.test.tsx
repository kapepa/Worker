import {screen} from '@testing-library/react';
import {TokenProvider} from "./TokenProvider";
import {RenderWithStore} from "../../../../shared/test/renderWithStore";

describe("<TokenProvider/>", () => {
  test("should be defined", () => {
    RenderWithStore(<TokenProvider children={<div>Children</div>}/>);
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  })
})