import React from 'react';
import FooterButton from '../../components/FooterButton';
import Header from '../../components/Header';

import './styles.scss';

function Home() {

  async function readFile() {
    const fileNames = await electron.readFileApi.readFile();
    console.log(fileNames)
  }

  return (
    <div className='container'>
      <Header />
      <div className='contactsContainer'>
        <div>
          <h2>Carregar arquivo .xlsx</h2>
          <button
            onClick={() => {
              electron.readFileApi.readFile()
            }}
            type='button'
          >
            Seleciona o arquivo no computador
          </button>
          <p>
            ATENÇÃO! O arquivo precisa ter as colunas <strong>nome</strong> e{' '}
            <strong>telefone</strong> como título (primeira célula da coluna)
            Todo telefone precisa do DDD
          </p>
          <span>
            <strong>Arquivo selecionado:</strong> minhalista.xlsx
          </span>
          <span>20 contatos identificados</span>
          <button
            onClick={() => {
              electron.notificationApi.sendNotification('olá mundo!');
            }}
            type='button'
          >
            Confirmar lista
          </button>
        </div>
        <div>
          <h2>Lista de Contatos:</h2>
          <ul>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
            <li>
              <strong>Luiz Fernando Veríssimo</strong> <span>43999211926</span>
            </li>
          </ul>
        </div>
      </div>
      <FooterButton />
    </div>
  );
}

export default Home;
