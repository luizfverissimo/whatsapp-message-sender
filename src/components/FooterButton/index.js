import React, { useContext } from 'react';
import { BiX, BiCheck } from 'react-icons/bi';
import { AppContext } from '../../contexts/AppContext';

import './styles.scss';

function FooterButton() {
  const {
    isListLoaded,
    isMessageConfigured,
    isReadyToSendMessage,
    sendMessage
  } = useContext(AppContext);
  return (
    <div className='footerButton'>
      <button
        disabled={!isReadyToSendMessage}
        onClick={sendMessage}
        type='button'
      >
        Enviar Mensagem
      </button>
      <p>
        <span className={isListLoaded ? 'active' : ''}>
        {isListLoaded ? <BiCheck size={24} color="#25D366"/> : <BiX size={24} color='red'/> } Lista de contatos adicionada
        </span>
        <span className={isMessageConfigured ? 'active' : ''}>
        {isMessageConfigured ? <BiCheck size={24} color="#25D366"/> : <BiX size={24} color='red'/> } Mensagem configurada 
        </span>
      </p>
    </div>
  );
}

export default FooterButton;
