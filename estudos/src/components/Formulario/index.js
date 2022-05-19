import styles from "./index.module.css"
import {useState} from 'react';

export default function Formulario(){

    function cadastrarusuario(e){
        (e).preventDefault();
        console.log(name);
        console.log(password);
        console.log(message)
        console.log("stoped event");
        
    }

    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [message,setMessage] = useState();


    return( 
        <form className={styles.form} onSubmit={cadastrarusuario}>
    <div>
        <label className={styles.label} htmlFor="name"> Nome:</label>
        <input  className={styles.input} type="text" id="name" onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
        <label className={styles.label} htmlFor="email">E-mail:</label>
        <input  className={styles.input} type="email" id="email" onChange={(e)=> setPassword(e.target.value)}/>
    </div>
    <div>
        <label className={styles.label} htmlFor="msg">Mensagem:</label>
        <textarea  className={styles.textarea}  id="msg" onChange={(e)=>setMessage(e.target.value)}></textarea>
    </div>
    <div>
        <input className={styles.submit} type="submit"></input>
    </div>
     
</form>
    )
}