import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "./app/contexts/Theme";
import "./i18n";
import ErrorBoundary from "./app/providers/ErrorBoundary";
import {SideProvider} from './app/contexts/Side';
import {Router} from "./app/providers/Routes";
import {StoreProvider} from "./app/providers/Store";
import {TokenProvider} from "./app/contexts/Token";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <SideProvider>
            <TokenProvider>
              <Router />
            </TokenProvider>
          </SideProvider>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
