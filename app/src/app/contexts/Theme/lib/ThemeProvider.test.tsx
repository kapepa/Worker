import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeProvider from "./ThemeProvider";

describe("<ThemeProvider/>", () => {

  test("should be defined", async () => {
    const mockChildren = "Children";
    await render(<ThemeProvider>{mockChildren}</ThemeProvider>);
    expect(screen.getByText(mockChildren)).toBeInTheDocument();
  })

})