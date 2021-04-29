import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

import './styles.scss';

function FooterButton() {
  const { isListLoaded } = useContext(AppContext);
  return (
    <div className='footerButton'>
      <button disabled type='button'>
        Enviar Mensagem para 20 contatos
      </button>
      <p>
        <span className={isListLoaded ? 'active' : ''}>
          Lista de contatos adicionada
        </span>
        <span>Mensagem configurada</span>
      </p>
    </div>
  );
}

export default FooterButton;
