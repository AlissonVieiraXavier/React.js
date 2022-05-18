import styles from './index.module.css'

export default function Pessoa({nome,foto,idade,descricao}){
    return( 
        <div>
            <img className={styles.image} src={foto} alt={nome}/>
            <h2>{nome}</h2>
            <p className={styles.paragrafo}>{idade}</p>
            <p className={styles.paragrafo}>{descricao}</p>
        </div>
    )
}