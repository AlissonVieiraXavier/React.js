import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{texto:string}>{
  render() {
    return (
      <button className={style.botao}>
       
      </button>
    )
  }
}

export default Botao;