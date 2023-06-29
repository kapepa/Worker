import React from 'react';
import './App.css';
import {ClassNames} from "../shared/lib/ClassNames/ClassNames";
import {UseTheme} from "./contexts/Theme";
import {Router} from "./providers/Routes";

function App() {
  const {theme} = UseTheme();

  return (
    <div className={`${ClassNames( "app", theme)}`}>
      <Router/>
    </div>
  );
}

export default App;
