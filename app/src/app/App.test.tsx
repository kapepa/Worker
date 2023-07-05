import React from 'react';
import {render, screen} from '@testing-library/react';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

describe("(<App />", () => {

  test('renders App', async () => {
    render(<App />, { wrapper:  () => (
        <RouterProvider
          router={createBrowserRouter([
            {  path: "/", element: <div>HomePage</div> }
          ])}
        />)
    });

    expect(screen.getByText("HomePage")).toBeInTheDocument();
  });

})

