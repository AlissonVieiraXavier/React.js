import styles from './index.module.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import HeaderBottom from './HeaderBottom'
import woman from './woman.png'


export default function Header({logo, alt}){
    
    function direcionarparaFace(){
        window.open("https://www.facebook.com/","_blank")
    };
    function direcionarparaTw(){
        window.open("https://twitter.com/twitterbrasil","_blank")
    };
    function direcionarparaIns(){
        window.open("https://www.instagram.com/","_blank")
    }
    
    
    
    return( 
        <div className={styles.header}>
            <div className={styles.header_top}>
                <img className={styles.header_top_img} src={logo}alt={alt}/>
                <div className={styles.header_top_div}>
                    <div className={styles.header_top_link}><a className={styles.header_top_link_a} href="index.html">inicio</a></div>
                    <div>
                        <ul className={styles.header_top_ul}>
                            <li className={styles.header_top_li}><FaFacebookF onClick={direcionarparaFace}/></li>
                            <li className={styles.header_top_li}><BsTwitter onClick={direcionarparaTw}/></li>
                            <li className={styles.header_top_li}><AiFillInstagram onClick={direcionarparaIns} /></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className={styles.header_apresentacao}>
               <HeaderBottom img={woman} alt="imagem de notebook"/>
            </div>
        </div>
    )
}