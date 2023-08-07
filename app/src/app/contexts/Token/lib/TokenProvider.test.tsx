import {screen} from '@testing-library/react';
import {TokenProvider} from "./TokenProvider";
import ComponentRender from "../../../../shared/test/componentRender";

describe("<TokenProvider/>", () => {
  test("should be defined", () => {
    ComponentRender(<TokenProvider children={<div>Children</div>}/>);
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  })
})