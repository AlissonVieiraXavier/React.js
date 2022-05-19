import Button from "../Button";


export default function Evento(){
    
    function ativaEvento(){
        console.log("Evento ativado!");
    }

    return( 
        <>
        <h1> clique no botão para disparar um evento</h1>
        <button onClick={ativaEvento}> ativar evento </button>
        <Button text=" Fumegando"/>
        </>
    )
}