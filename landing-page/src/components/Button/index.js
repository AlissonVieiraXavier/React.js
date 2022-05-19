import styles from './index.module.css'

export default function Button({titulo,icon}){
    return( 
        <>
        <button className={styles.header_bottom_div_texto_button}>{titulo}<i>{icon}</i></button>
        </>
    )
}