import {render} from "@testing-library/react";
import i18n from "../config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {RouterPath} from "../const/Routers";
import {createMemoryRouter, Outlet, RouterProvider} from "react-router-dom";
import {routeConfig} from "../../app/providers/Routes/ui/Router";
import {FC} from "react";
import {RouteObject} from "react-router";
import {StateSchema, StoreProvider} from "../../app/providers/Store";


const RenderWithMemoryRouter = ({path, params, store = {} as StateSchema}: {path: RouterPath, store?: StateSchema, params?: string}) => {
  const WrapperOutlet: FC = () => <StoreProvider preloadedState={store}  children={<Outlet/>}/>
  const toRoute: RouteObject = {...routeConfig[0], element: <WrapperOutlet/>}
  const isPath = !!params ? `${path}/${params}` : path
  const router = createMemoryRouter( [toRoute], {
    initialEntries: [isPath],
  });

  return render(
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}

export {RenderWithMemoryRouter}