import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {ElementType, lazy, Suspense} from "react";
import PageLoader from "../../../../widgets/PageLoader";

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
// const HomePage = Loadable(lazy(() => {
//   return new Promise<{default: any}>((resolve) => {
//     setTimeout(() => {
//       resolve(import("../../../../pages/Home"))
//     },5000)
//   })
// }));
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
