import React, { createContext, useContext, useEffect, useState } from 'react';
import { ConfigContext } from './ConfigContext';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [listJSON, setListJSON] = useState([]);
  const [isListLoaded, setIsListLoaded] = useState(false);
  const [listParams, setListParams] = useState([]);
  const [isMessageConfigured, setIsMessageConfigured] = useState(false);
  const [messageSaved, setMessageSaved] = useState('');
  const [isReadyToSendMessage, setIsReadyToSendMessage] = useState(false);
  const [isSendingImage, setIsSendingImage] = useState(false);
  const [imagePath, setImagePath] = useState('');

  const { timeBefore, timeAfter } = useContext(ConfigContext);

  useEffect(() => {
    if (isListLoaded && isMessageConfigured) {
      setIsReadyToSendMessage(true);
    }
  }, [isListLoaded, isMessageConfigured]);

  useEffect(() => {
    setImagePath('');
  }, [isSendingImage]);

  function saveMessage(message) {
    setMessageSaved(message);
    setIsMessageConfigured(true);
    alert(`A mensagem: "${message}" foi salva!`);
  }

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

  function selectImage() {
    const resPath = electron.readImageApi.readImage();
    console.log(resPath);
    setImagePath(resPath);
  }

  function sendMessage() {
    if (isListLoaded && isMessageConfigured) {
      electron.senderApi.sendWhatsappMessage(
        messageSaved,
        listJSON,
        timeBefore,
        timeAfter,
        isSendingImage,
        imagePath
      );
    }
  }

  return (
    <AppContext.Provider
      value={{
        isListLoaded,
        isSendingImage,
        isMessageConfigured,
        isReadyToSendMessage,
        messageSaved,
        listParams,
        listJSON,
        imagePath,
        selectFile,
        saveMessage,
        sendMessage,
        setIsSendingImage,
        selectImage
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
