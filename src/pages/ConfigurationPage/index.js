import React, { useContext } from 'react';

import Header from '../../components/Header';
import { ConfigContext } from '../../contexts/ConfigContext';

import './styles.scss';

function ConfigurationPage() {
  const { timeAfter, timeBefore, setTimeBefore, setTimeAfter } = useContext(
    ConfigContext
  );

  return (
    <div className='container'>
      <Header />
      <div className='configContainer'>
        <div>
          <h2>Configurações:</h2>
          <label htmlFor='before'>Tempo antes de enviar a mensagem:</label>
          <div>
            <input
              id='before'
              type='number'
              value={timeBefore}
              onChange={(e) => setTimeBefore(e.target.value)}
            ></input>
            <span>MS (milissegundos)</span>
          </div>
          <label htmlFor='after'>Tempo após enviar a mensagem:</label>
          <div>
            <input
              id='after'
              type='number'
              value={timeAfter}
              onChange={(e) => setTimeAfter(e.target.value)}
            ></input>
            <span>MS (milissegundos)</span>
          </div>

          <p>
            A configuração desses intervalos de tempo é de importância para
            evitar que o navegador feche antes de enviar a mensagem para o
            contato, caso isso acontece irá interromper o fluxo de envio das
            mensagens com uma mensagem de alerta do navegador.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfigurationPage;
