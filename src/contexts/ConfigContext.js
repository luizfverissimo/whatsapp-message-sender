import React, { createContext, useState } from 'react';

export const ConfigContext = createContext({});

function ConfigContextProvider({ children }) {
  const [timeBefore, setTimeBefore] = useState(500);
  const [timeAfter, setTimeAfter] = useState(1000);

  return (
    <ConfigContext.Provider
      value={{ timeAfter, timeBefore, setTimeBefore, setTimeAfter }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigContextProvider;
