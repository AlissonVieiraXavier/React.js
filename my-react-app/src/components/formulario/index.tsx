import react from 'react'
import Botao from '../button'
import './style.scss'

class Formulario extends react.Component{
   render() {
       return(
           <form className="novaTarefa">
               <div className="inputContainer">
                    <label htmlFor='tarefa'> Adicione um novo estudo</label>
                    <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você quer estudar?"
                    required>
                    </input>
               </div>
               <div className="inputContainer">
                    <label htmlFor='tempo'> Tempo </label>
                    <input type="time"
                    step='1'
                    name="tempo"
                    id='tempo'
                    min='00:00:00'
                    max="01:30:00"
                    required>

                    </input>
                </div>

                    <Botao />
           </form>
       )
   }
}

export default Formulario;