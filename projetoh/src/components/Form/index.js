import {useState} from 'react';
import styles from './index.module.css'
export default function Form(){
   
    const [nome,setname] = useState();
    const [senha, setsenha] = useState();

    return( 
        <>
        <h1> Meu cadastro:</h1>
        <form className={styles.form}onSubmit={cadastrarUsuario}>
            <label htmlFor="name">Nome</label>
            <input className={styles.input}type="text" name="name" id="name" onChange={(e)=>setname(e.target.value)}></input>
            <label htmlFor="password">Senha</label>
            <input className={styles.input} id="password" name="password"type="password" onChange={(e) => setsenha(e.target.value)}></input>
            <input className={styles.button}type="submit"></input>
        </form>
        
        </>
    )
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log("Cadastrou o gente boa")
        console.log(nome);
        console.log(senha);
    }
}