import {BsArrowDownCircle} from 'react-icons/bs';
import {BsArrowUpCircle} from 'react-icons/bs';
import styles from "./index.module.css"

export default function Pergunta({duvida,resposta}){
    return( 
        <div className={styles.pergunta}>
            <h1 className={styles.pergunta_duvida}>{duvida}</h1>
            <i className={styles.pergunta_icon_down}><BsArrowDownCircle/></i>
            <i className={styles.pergunta_icon_up}><BsArrowUpCircle/></i>
            <p className={styles.pergunta_resposta}>{resposta}</p>

        </div>
    )
}