import React from 'react';
import './App.scss';
import ModalsLayout from "./layout/ModalsLayout/ModalsLayout";
import Panel from "../widgets/Panel";
import Sidebar from "../widgets/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
