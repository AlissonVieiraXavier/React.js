import styles from './index.module.css'

export default function Button({titulo}){
    return( 
        <>
        <button className={styles.header_bottom_div_texto_button}>{titulo}</button>
        </>
    )
}