import React from 'react';
import { BiCog } from 'react-icons/bi';

import './styles.scss';

function Header() {
  return (
    <header className='headerContainer'>
      <div className='header'>
        <h1>WhatsApp Message Sender</h1>
        <BiCog size={32} />
      </div>
      <div className='tabsNavigation'>
        <div className="active">
          <h2>Contatos</h2>
        </div>
        <div>
          <h2>Menssagem</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
