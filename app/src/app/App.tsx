import React from 'react';
import './App.scss';
import ModalsLayout from "./layout/ModalsLayout/ModalsLayout";
import Panel from "../widgets/Panel";
import Sidebar from "../widgets/Sidebar";
import { Outlet } from "react-router-dom";
import {StoreProvider} from "./providers/Store";
import {TokenProvider} from "./contexts/Token";

function App() {
  return (
    <StoreProvider>
      <TokenProvider>
        <ModalsLayout>
          <div className="app-base" data-testid="app">
            <Panel/>
            <div className="content-page">
              <Sidebar className=""/>
              <main className="content-main app-base__main">
                <Outlet/>
              </main>
            </div>
          </div>
        </ModalsLayout>
      </TokenProvider>
    </StoreProvider>
  );
}

export default App;
