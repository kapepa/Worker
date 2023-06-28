import React from 'react';
import './App.css';
import {ClassNames} from "../shared/lib/ClassNames/ClassNames";
import {UseTheme} from "./contexts/Theme";
import {Router} from "./providers/Routes";

function App() {
  const {theme, toggleTheme} = UseTheme();

  return (
    <div className={`${ClassNames( "app", theme)}`}>
      <button onClick={toggleTheme}>Theme</button>
      <Router/>
    </div>
  );
}

export default App;
