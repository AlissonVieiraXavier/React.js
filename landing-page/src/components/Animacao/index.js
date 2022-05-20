import styles from './index.module.css'
import mktpng from './15.png'


export default function Animacao(){
    return( 
        <div className={styles.animacao}>
        <h2 className={styles.animacao_title}> Entenda como melhorar suas campanhas e atingir <br></br>seu <strong className={styles.strong}>publico-alvo!</strong></h2>
        <img className={styles.animacao_img} src={mktpng} alt="animação"/>
   
        </div>
    )
}