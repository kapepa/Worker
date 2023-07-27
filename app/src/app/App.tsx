import React from 'react';
import './App.css';
import ModalsLayout from "./layout/ModalsLayout/ModalsLayout";

interface AppProps {
  children: React.ReactNode
}

function App({children}: AppProps) {
  return (
    <div
      data-testid="app"
    >
      <ModalsLayout>
        {children}
      </ModalsLayout>
    </div>
  );
}

export default App;
