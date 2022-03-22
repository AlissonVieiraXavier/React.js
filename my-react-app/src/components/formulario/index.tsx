import react from 'react'
import Botao from '../button'

class Formulario extends react.Component{
   render() {
       return(
           <form>
               <div>
            <label> Nome </label>
            <input></input>
               </div>
               <div>
            <label> Email </label>
            <input></input>
           </div>
           <div>
           <textarea></textarea>
           </div>
               <Botao />
           </form>
       )
   }
}

export default Formulario;