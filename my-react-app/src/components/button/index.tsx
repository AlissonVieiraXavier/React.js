import react from 'react';

class Botao extends react.Component{
    render(){
        const estaAtivo = true;
        const styles = {
            backgroundColor: estaAtivo ? "#338" : "black",
            color: 'white'
        }

        return(
            <button style={styles}>            
                Clique Aqui
            </button>
        )
    }
}

export default Botao;