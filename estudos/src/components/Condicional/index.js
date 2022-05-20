import {useState} from 'react'

export default function Condicional(){
   
   const [email,setEmail] = useState();
   const [userEmail,setUserEmail] = useState();
   
    return( 
        <>
        <h1> Cadastre seu Email: </h1>
        <form>
            <input type="email" placeholder="digite seu Email..." onChange={(e) => setEmail(e.target.value)}></input>
        </form>
        <button type="submit" 
        onClick={ (e) => { 
            (e).preventDefault();
            setUserEmail(email)
            console.log(email)
        } 
        }>ok</button>
        {userEmail && (
            <div>
                <p>`o email capturado é {userEmail}` </p>
            </div>
        )}



        </>

    )
}