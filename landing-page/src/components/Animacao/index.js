import styles from './index.module.css'
import mktpng from './15.png'


export default function Animacao(){
    return( 
        <div className={styles.animacao}>
        <h2 className={styles.animacao_title}> Entenda como melhorar suas campanhas e atingir seu publico-alvo.</h2>
        <img className={styles.animacao_img} src={mktpng} alt="animação"/>
   
        </div>
    )
}