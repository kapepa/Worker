import {render} from "@testing-library/react";
import i18n from "../config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {RouterPath} from "../const/Routers";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {routeConfig} from "../../app/providers/Routes/ui/Router";
import * as Redux from '@reduxjs/toolkit'
const RenderWithMemoryRouter = ({path}: {path: RouterPath}) => {
  const router = createMemoryRouter(routeConfig, {
    initialEntries: [path],
  });

  jest.spyOn(Redux, "combineReducers").mockReturnValue({} as any)

  return render(
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}

export {RenderWithMemoryRouter}