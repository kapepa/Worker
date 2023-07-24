import React from 'react';
import './App.css';
import ModalsLayout from "./layout/ModalsLayout/ModalsLayout";
// import { UseTheme } from "./contexts/Theme";
// import {ClassNames} from "../shared/lib/ClassNames";
// import {BugBtn} from "./providers/ErrorBoundary";

interface AppProps {
  children: React.ReactNode
}

function App({children}: AppProps) {
  // const {theme} = UseTheme();

  return (
    <div
      // className={`${ClassNames( "app", theme)}`}
      data-testid="app"
    >
      {/*<BugBtn/>*/}
      <ModalsLayout>
        {children}
      </ModalsLayout>
    </div>
  );
}

export default App;
