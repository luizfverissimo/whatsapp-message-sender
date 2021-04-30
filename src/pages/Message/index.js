import React, { useContext, useEffect, useState } from 'react';
import stringInject from 'stringinject';

import FooterButton from '../../components/FooterButton';
import Header from '../../components/Header';
import { AppContext } from '../../contexts/AppContext';

import './styles.scss';

function Message() {
  const {
    listParams,
    isMessageConfigured,
    listJSON,
    saveMessage,
    messageSaved
  } = useContext(AppContext);

  const [message, setMessage] = useState(
    messageSaved.length <= 0 ? '' : messageSaved
  );
  const [messagePreview, setMessagePreview] = useState('');
  const [isMessageWrote, setIsMessageWrote] = useState(false);

  useEffect(() => {
    if (message.length > 1) {
      setIsMessageWrote(true);
    }
    if (message.length <= 1) {
      setIsMessageWrote(false);
    }
  }, [message]);

  function getPreviewMessage() {
    const messageReplaced = stringInject(message, listJSON[0]);
    setMessagePreview(messageReplaced);
  }

  function addParamToText(params) {
    const newMessageConcat = message.concat(`{${params}}`);
    setMessage(newMessageConcat);
  }

  return (
    <div className='container'>
      <Header />
      <div className='messageContainer'>
        <div>
          <h2>Mensagem:</h2>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button onClick={getPreviewMessage} type='button'>
            Pré-visualizar mensagem
          </button>
          <p>Pré-visualização:</p>
          <textarea value={messagePreview} disabled />
          <button
            onClick={() => saveMessage(message)}
            disabled={!isMessageWrote}
            type='button'
          >
            {isMessageConfigured
              ? 'Confirmar nova mensagem'
              : 'Confirmar mensagem'}
          </button>
        </div>
        <div>
          <h2>Parâmetros:</h2>
          <ul>
            {listParams.length > 0 ? (
              listParams.map((params, index) => {
                return (
                  <li key={index} onClick={() => addParamToText(params)}>
                    {params}
                  </li>
                );
              })
            ) : (
              <p style={{ color: 'var(--gray-100)' }}>
                Nenhum parâmetro encontrado. Carregue uma lista.
              </p>
            )}
          </ul>
        </div>
      </div>
      <FooterButton />
    </div>
  );
}

export default Message;
