import style from './footer.module.css';
import logo from '../../assets/logo.png';
import { AiFillYoutube } from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai'


export default function Footer(){
    return( 
    <div>
        <footer className={style.rodape}>
            <div className={style.logodescrição}>
                <img src={logo} alt="logotipo"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, harum animi. Illo sint quibusdam provident sequi vero possimus cum aperiam corporis voluptatem molestiae vitae quaerat asperiores totam, omnis fugit quisquam?</p>
            </div>
            <div className={style.footer_contatos}>
                <h5 className={style.footer_title}>Contact us</h5>
                <p>Rua Saint Cruz 135, Indonesia</p>
                <p>exemplo@example.com</p>
                <p>(41) 99999-9999</p>
            </div>
            <div className={style.footer_followus}>
                <h5 className={style.footer_title}> Follow us</h5>
                <p> Find us in social medias</p>
                <div className={style.footer_icons}>
                    <i className={style.youtubeicon}><AiFillYoutube/></i>
                    <i class={style.tiktokicon}><AiFillInstagram/></i>
                    <i className={style.instaicon}><AiFillFacebook/></i>
                    <i className={style.faceicon}></i>
                </div>
            </div>
         </footer>
         <div className={style.direitos}>
         2022 &copy; Developed by <a href="https://alissonvieiraxavier.com/" rel="noreferrer" target="_blank">Alisson Xavier</a>
         </div>
    </div>
    )
}