export default function Evento(){
    return(
        <>
        <p> Clique para disparar um evento</p>
        <button onClick={ativaEvento}>Ativar!</button>
        </>
    )

    function ativaEvento(){
        console.log("xuxu beleza")
    }
}