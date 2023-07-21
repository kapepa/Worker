import { screen } from '@testing-library/react';
import Panel from "./Panel";
import ComponentRender from "../../../shared/test/componentRender";

describe("<Panel />", () => {

  test('renders learn react link', () => {
    ComponentRender(<Panel />);
    const linkElement = screen.getByTestId("panel");
    expect(linkElement).toBeInTheDocument();
  });

})
