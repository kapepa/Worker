import React, {useEffect, useState} from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import ErrorBoundary from "./ErrorBoundary";

describe("<ErrorBoundary/>", () => {
  test('should pass', () => {
    const ThrowError = () => {
      const [error, setError] = useState<boolean>(false);

      const onThrow = () => setError(true)

      useEffect(() => {
        if(error) throw new Error();
      }, [error])

      return <button onClick={onThrow}>Throw</button>
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Throw' }))

    expect(screen.getByTestId("error")).toBeInTheDocument()

    // expect(screen.queryByRole("alert")).toBeInTheDocument();
    // fireEvent.click(screen.getByRole("button", { name: "Try again?" }));
    // expect(screen.queryByRole("alert")).not.toBeInTheDocument();

  })

})