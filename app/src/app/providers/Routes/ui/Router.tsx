import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {ElementType, lazy, Suspense} from "react";

const Loadable = (Component: ElementType) =>
  function fn(props: any) {
    return (
      <Suspense
        fallback={<div>Loading...</div>}
      >
        <Component {...props} />
      </Suspense>
    );
  };

const HomePage = Loadable(lazy(() => import("../../../../pages/Home")));
const AboutPage = Loadable(lazy(() => import("../../../../pages/About")));
const ErrorPage = Loadable(lazy(() => import("../../../../pages/Error")));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
]);


export function Router() {
  return <RouterProvider router={routers} />
}

export {routers}
