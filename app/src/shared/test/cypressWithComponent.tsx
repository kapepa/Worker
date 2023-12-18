import {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "../../app/providers/Store";
import {I18nextProvider} from "react-i18next";
import i18n from "../config/i18n/i18nForTests";
import {DeepPartial} from "@reduxjs/toolkit";
import "../../app/styles/index.scss";
import {ThemeProvider} from "../../app/contexts/Theme";

export interface ComponentRenderOption {
  route?: string,
  reloadedState?: DeepPartial<StateSchema>,
}

const CypressWithComponent = function (component: ReactNode, option: ComponentRenderOption = {}) {
  const { route = "/" } = option;

  return (
    <ThemeProvider>
      <MemoryRouter initialEntries={[route]}>
        <StoreProvider preloadedState={option?.reloadedState as StateSchema}>
          <I18nextProvider i18n={i18n}>
            {component}
          </I18nextProvider>
        </StoreProvider>
      </MemoryRouter>
    </ThemeProvider>
  )
};

export {CypressWithComponent};