import styles from './index.module.css'
import Button from '../Button'
import {FaRegSmileBeam} from 'react-icons/fa'

export default function AlemDisso(){
    return( 
        <div className={styles.alemdisso}>
            <h2 className={styles.alemdisso_h2}> Além disso você também irá aprender</h2>
            <div className={styles.div_figures}>
                <div className={styles.div_figures_item}>Como usar instagram e o Facebook para aumentar conversões</div>
                <div className={styles.div_figures_item}>Como melhorar a percepção da marca através das análises</div>
                <div className={styles.div_figures_item}>Como criar materiais de marketing que geram vendas</div>
            </div>
            <Button className={styles.button}titulo="Garantir meu lugar" icon={<FaRegSmileBeam/>}/>
        </div>
    )
}