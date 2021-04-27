import React from 'react';

import './styles.scss'

function FooterButton() {
  return (
    <div className='footerButton'>
      <button disabled type='button'>Enviar Mensagem para 20 contatos</button>
      <p>
        <span className="active">Lista de contatos adicionada</span>
        <span>Mensagem configurada</span>
      </p>
    </div>
  );
}

export default FooterButton;
