import React from 'react';
import { AppContextProvider } from './contexts/AppContext';
import ConfigContextProvider from './contexts/ConfigContext';

import Routes from './routes';

function App() {
  return (
    <ConfigContextProvider>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </ConfigContextProvider>
  );
}

export default App;
