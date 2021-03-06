import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00:00" 
  }
  render() {
    return (
      <form className={style.novaTarefa}>
        <h1 className={style.title}> Alura Studies</h1>
        
        <div className={style.inputContainer}> 
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao texto='Adicionar'/>
      </form>
    )
  }
}

export default Formulario;