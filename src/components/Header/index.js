import React from 'react';
import { BiCog } from 'react-icons/bi';
import { Link, useRouteMatch } from 'react-router-dom';

import './styles.scss';

function Header() {
  const isHomePath = useRouteMatch({
    path: '/',
    exact: true
  });

  const isMessagePath = useRouteMatch({
    path: '/message',
    exact: true
  });

  return (
    <header className='headerContainer'>
      <div className='header'>
        <div>
          <img src='assets/logo-full.png' />
          <h1>WhatsApp Message Sender</h1>
        </div>
        <Link to='/config'>
          <BiCog size={32} className='icon' />
        </Link>
      </div>
      <div className='tabsNavigation'>
        <Link to='/' style={{ width: '100%' }}>
          <div className={isHomePath ? 'active' : ''}>
            <h2>Contatos</h2>
          </div>
        </Link>
        <Link to='/message' style={{ width: '100%' }}>
          <div className={isMessagePath ? 'active' : ''}>
            <h2>Mensagem</h2>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
