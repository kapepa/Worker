import React, {lazy} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import useTheme from "./contexts/Theme/useTheme";
import {ClassNames} from "./utils/ClassNames";

const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./pages/Error/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>,
    errorElement:
      <React.Suspense fallback={<div>Loading...</div>}>
        <Error />
      </React.Suspense>
  },
  {
    path: "*",
    element:
      <React.Suspense fallback={<div>Loading...</div>}>
        <Error />
      </React.Suspense>
  }
]);

function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Theme</button>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
