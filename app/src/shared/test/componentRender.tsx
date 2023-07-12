import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18n from "../config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";

export interface ComponerRenderOption {
  route?: string,
}

const ComponentRender = (component: ReactNode, option: ComponerRenderOption = {}) => {
  const { route = "/" } = option;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
}

export default ComponentRender;