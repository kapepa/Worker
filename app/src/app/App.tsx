import React from 'react';
import './App.css';
import {ClassNames} from "../shared/lib/ClassNames";
import {UseTheme} from "./contexts/Theme";
import {Router} from "./providers/Routes";
// import {BugBtn} from "./providers/ErrorBoundary";

function App() {
  const {theme} = UseTheme();

  return (
    <div className={`${ClassNames( "app", theme)}`} data-testid="app">
      {/*<BugBtn/>*/}
      <Router/>
    </div>
  );
}

export default App;
