import styles from './index.module.css'
import SimpleSlider from './Slider'
//import img1 from "./"


export default function Comentarios()
{
    return(
       <div className={styles.comentarios}>
           <h1> Depoimentos de Seminários anteriores</h1>
           <div className={styles.content}>
           <SimpleSlider/>
           </div>

       </div> 
    )
}