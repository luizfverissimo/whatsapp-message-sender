import React, { useContext } from 'react';
import FooterButton from '../../components/FooterButton';
import Header from '../../components/Header';
import { AppContext } from '../../contexts/AppContext';

import './styles.scss';

function Home() {
  const {isListLoaded, listJSON, selectFile } = useContext(AppContext);

  return (
    <div className='container'>
      <Header />
      <div className='contactsContainer'>
        <div>
          <h2>Carregar arquivo .xlsx ou .xls</h2>
          <button onClick={selectFile} type='button'>
            {!isListLoaded ? 'Selecione o arquivo no computador' : 'Selecionar um novo arquivo'}
          </button>
          <p>
            ATENÇÃO! O arquivo precisa ter as colunas <strong>nome</strong> e{' '}
            <strong>telefone</strong> como título (primeira célula da coluna)
            Todo telefone precisa do DDD
          </p>
          <span className="spanContacts">{listJSON.length} contatos identificados</span>
        </div>
        <div>
          <h2>Lista de Contatos:</h2>
          <ul>
            {listJSON.length > 0 ?
              listJSON.map((contact, index) => {
                return (
                  <li key={index}>
                    <strong>{contact.nome}</strong>{' '}
                    <span>{contact.telefone}</span>
                  </li>
                );
              }) : <p style={{color: 'var(--gray-100)'}}>Nenhum contato. Selecione arquivo de lista para iniciar.</p>}
          </ul>
        </div>
      </div>
      <FooterButton />
    </div>
  );
}

export default Home;
