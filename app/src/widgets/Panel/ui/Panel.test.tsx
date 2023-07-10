import { render, screen } from '@testing-library/react';
import Panel from "./Panel";

describe("<Panel />", () => {

  test('renders learn react link', () => {
    render(<Panel />);
    const linkElement = screen.getByTestId("panel");
    expect(linkElement).toBeInTheDocument();
  });

})
