import './Contato.module.css';

export default function Contato(){
    return(
        <div>
            <h1> Fale conosco </h1>
            <form className="form-contact">
                 <label>Nome:<input type="text" name="name" /></label>
                 <label>Email:<input type="email" name="email" /></label>
                 <label>Mensagem:</label>
                 <textarea placeholder="Digite seu texto aqui"></textarea>
                 
                 <input type="submit" value="Enviar" />
            </form>
        </div>
           );
}