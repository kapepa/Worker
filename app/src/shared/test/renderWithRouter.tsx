import {ReactNode} from "react";
import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import i18n from "../config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";

const RenderWithRouter = (component: ReactNode, path?: string) => {
  const route = !!path ? path : "/";

  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </I18nextProvider>
  )
}

export default RenderWithRouter;