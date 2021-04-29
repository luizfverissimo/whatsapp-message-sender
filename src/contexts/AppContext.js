import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [listJSON, setListJSON] = useState([]);
  const [isListLoaded, setIsListLoaded] = useState(false);
  const [listParams, setListParams] = useState([]);

  function propertyVerification(property, object) {
    return object.hasOwnProperty(property);
  }

  function extractParams(object) {
    let objectKeys = [];
    Object.keys(object).map((key) => {
      objectKeys.push(key);
    });
    
    setListParams(objectKeys);
  }

  async function selectFile() {
    const responseList = electron.readFileApi.readFile();

    if (responseList.length === 0) {
      setIsListLoaded(false);
      return;
    }

    if (
      !propertyVerification('nome', responseList[0]) ||
      !propertyVerification('telefone', responseList[0])
    ) {
      alert('A tabela precisa ter um campo nome e telefone.');
      return;
    }

    setListJSON(responseList);
    setIsListLoaded(true);
    extractParams(responseList[0]);
  }

  return (
    <AppContext.Provider
      value={{ isListLoaded, listParams, listJSON, selectFile }}
    >
      {children}
    </AppContext.Provider>
  );
}
