import Botao from "../button";
import Relogio from "../Relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p>Escolha um card e inicie o cronometro</p>
      <div>
        <Relogio />
      </div>
      <Botao> Começar </Botao>
    </div>
  );
}
