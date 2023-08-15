import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {ElementType, lazy, Suspense} from "react";
import PageLoader from "../../../../widgets/PageLoader";
import App from "../../../App";
import {RouterPath} from "../../../../shared/const/Routers";

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
const ProfilePage = Loadable(lazy( () => import("../../../../pages/Profile").then(module => ({default: module.Profile})) ));
const ErrorPage = Loadable(lazy(() => import("../../../../pages/Error")));

const routers = createBrowserRouter([
  {
    path: RouterPath.HOME,
    element:  <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: RouterPath.HOME,
        element: <HomePage />,
      },
      {
        path: RouterPath.ABOUT,
        element: <AboutPage />,
      },
      {
        path: RouterPath.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ]
  },
]);

export function Router() {
  return (
    <RouterProvider router={routers} />
  )
}

export {routers};
