import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {ElementType, lazy, Suspense} from "react";
import PageLoader from "../../../../widgets/PageLoader";

export enum RouterPath {
  HOME = "/",
  ABOUT = "/about",
}

const Loadable = (Component: ElementType) =>
  function fn(props: any) {
    return (
      <Suspense
        fallback={<PageLoader/>}
      >
        <Component {...props} />
      </Suspense>
    );
  };

const HomePage = Loadable(lazy(() => import("../../../../pages/Home")));
const AboutPage = Loadable(lazy(() => import("../../../../pages/About").then(module => ({default: module.About}) )));
const ErrorPage = Loadable(lazy(() => import("../../../../pages/Error")));

const routers = createBrowserRouter([
  {
    path: RouterPath.HOME,
    element: <HomePage />,
  },
  {
    path: RouterPath.ABOUT,
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
