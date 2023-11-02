import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {ElementType, lazy, Suspense} from "react";
import PageLoader from "../../../../widgets/PageLoader";
import App from "../../../App";
import {RouterPath} from "../../../../shared/const/Routers";
import {RoleAuth} from "./RoleAuth";

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
const ArticlePage = Loadable(lazy(() => import("../../../../pages/Article").then(module => ({default: module.Article})) ));
const ArticleEditPage = Loadable(lazy(() => import("../../../../pages/ArticleEdit").then(module => ({default: module.ArticleEdit})) ));
const AdminPage = Loadable(lazy(() => import("../../../../pages/Admin").then(module => ({default: module.Admin}))));
const ArticleCreatePage = Loadable(lazy(() => import("../../../../pages/ArticleCreate").then(module => ({default: module.ArticleCreate})) ));
const DetailsPage = Loadable(lazy(() => import("../../../../pages/Details").then(module => ({default: module.Details})) ));
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
        path: RouterPath.ADMIN,
        element: <AdminPage />,
      },
      {
        path: RouterPath.ARTICLE,
        element: <ArticlePage />,
      },
      {
        path: RouterPath.ARTICLE_EDIT + "/:id",
        element: <ArticleEditPage/>
      },
      {
        path: RouterPath.ARTICLE_CREATE,
        element: <ArticleCreatePage/>
      },
      {
        path: RouterPath.ARTICLE + "/:id",
        element: <DetailsPage />,
      },
      {
        path: RouterPath.PROFILE + "/:id",
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
