import React from 'react';
import styles from './Buscador.module.scss';
import {BiSearchAlt} from 'react-icons/bi'

interface Props{
   busca:string,
   setBusca : React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca,setBusca}: Props){
    return(
        <div className={styles.buscador}>
           <input
           value={busca}
           onChange={(e)=>setBusca(e.target.value)}>
           </input>
           <i><BiSearchAlt/></i>
        </div>
    )
}