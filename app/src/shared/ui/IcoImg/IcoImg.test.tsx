import { render, screen } from '@testing-library/react';
import IcoImg from "./IcoImg";

describe("<IcoImg />",() => {
  test('renders IcoImg', () => {
    render(<IcoImg ico={'HomeIco'} />);
    expect(screen).toBeDefined();
  });
})