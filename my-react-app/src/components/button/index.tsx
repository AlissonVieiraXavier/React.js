import react from 'react';
import style from './botao.module.scss'

class Botao extends react.Component{
    render(){
      return(
            <button className={style.botao}>            
                Clique Aqui
            </button>
        )
    }
}

export default Botao;