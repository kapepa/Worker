import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from "./App";
import {Router, RouterProvider} from "react-router-dom";
import { createMemoryHistory } from 'history';
import {routers} from "./providers/Routes/ui/Router";

describe("(<App />", () => {
  test('renders App', async () => {
    render(<App />);

  });

})

