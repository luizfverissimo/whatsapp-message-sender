import React, { useState } from 'react';
import FooterButton from '../../components/FooterButton';
import Header from '../../components/Header';

import './styles.scss';

function Message() {
  const [message, setMessage] = useState('');

  return (
    <div className='container'>
      <Header />
      <div className='messageContainer'>
        <div>
          <h2>Mensagem:</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p>Pré-visualização:</p>
          <textarea value={message} disabled />
          <button type='button'>Confirmar mensagem</button>
        </div>
        <div>
          <h2>Parâmetros:</h2>
          <ul>
            <li>nome</li>
            <li>telefone</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
            <li>horário</li>
          </ul>
        </div>
      </div>
      <FooterButton/>
    </div>
  );
}

export default Message;
