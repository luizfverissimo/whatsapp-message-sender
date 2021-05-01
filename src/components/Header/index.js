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
        <h1>WhatsApp Message Sender</h1>
        <Link to='/config'>
          <BiCog size={32} className='icon' />
        </Link>
      </div>
      <div className='tabsNavigation'>
        <div className={isHomePath ? 'active' : ''}>
          <Link to='/'>
            <h2>Contatos</h2>
          </Link>
        </div>
        <div className={isMessagePath ? 'active' : ''}>
          <Link to='/message'>
            <h2>Mensagem</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
