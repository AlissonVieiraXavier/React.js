import styles from './index.module.css'
import {FcFaq} from 'react-icons/fc'
import Pergunta from './Pergunta'


export default function Faq(){
    return( 
        <div className={styles.faq}>
            <h2  className={styles.faq_h2}>Perguntas Frequentes <i><FcFaq/></i></h2>
            <Pergunta  duvida='lorem inpum vervbdafb rhggrg werg3' resposta='lorem inpum vervbdafb rhggrg werg3' />

        </div>
    )
}