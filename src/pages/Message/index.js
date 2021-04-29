import React, { useContext, useState } from 'react';
import stringinject from 'stringinject';

import FooterButton from '../../components/FooterButton';
import Header from '../../components/Header';
import { AppContext } from '../../contexts/AppContext';

import './styles.scss';

function Message() {
  const [message, setMessage] = useState('');
  const [messagePreview, setMessagePreview] = useState('');

  const { listParams, listJSON } = useContext(AppContext);

  function getPreviewMessage() {
    const messageReplaced = stringinject(message, listJSON[0]);
    console.log(messageReplaced)
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
          <button type='button'>Confirmar mensagem</button>
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
