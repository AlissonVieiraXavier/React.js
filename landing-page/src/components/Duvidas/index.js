import img from './mkt.jpg'
import style from "./index.module.css"
import Button from '../Button'


export default function Duvidas(){

    return(
        <div className={style.maindiv}>
            <h1 className={style.h1}> Porque devo aprender Marketing digital?</h1>
            <div className={style.responsive}>
            <div><img className={style.img}src={img} alt="duvidas img"/></div>
            <div className={style.textos}> <p> Marketing digital são ações de comunicação que as empresas podem utilizar por meio da internet, da telefonia celular e outros meios digitais, para assim divulgar e comercializar.</p>
                 <button className={style.button}>Saber mais</button></div>
            </div>
        </div>
    )
}