import styles from './Navbar.module.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import PaginaInicial from '../../Pages/PaginaInicial';
import Sobre from '../../Pages/Sobre';
import MaisVistos from '../../Pages/MaisVistos';
import Contato from '../../Pages/Contato';
import logo from '../../assets/logo.png';
import {GoThreeBars} from 'react-icons/go';
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineYoutube} from 'react-icons/ai';
import {useState} from 'react';

export default function Navbar(){

    const [notActive,setActive] = useState(true);

    const ToggleToActive = () => (
        setActive(!notActive)
    )
    const Toinstagram = () => (
        window.open("https://www.instagram.com/cristinaartesemcroche/","_blank")
    )
    const ToYoutube = () => (
        window.open("https://www.youtube.com/channel/UCnCwKu5zmQQ4bNmgoygtxLw","_blank")
    )

    return(
    <nav className={styles.navbar}>
        <div className={styles.responsive_mobile}>
            <img src={logo} alt='Logo' class={styles.logotipo}/>
             <button  onClick={ToggleToActive} className={styles.btn_burger}> <GoThreeBars/> </button>
        </div>
        <BrowserRouter>
        <ul className={notActive ? styles.list : styles.list_active}>
            <li><Link className={styles.list_item} to="/">Inicio</Link></li>
            <li><Link className={styles.list_item} to="/Sobre">Sobre</Link></li>
            <li><Link className={styles.list_item} to="/Mais-vistos">Videos</Link></li>
            <li><Link className={styles.list_item} to="/Contato">Contato</Link></li>
            <li className={styles.icons_list}>
                <div onClick={Toinstagram} className={styles.icons_item1}><FaInstagram/></div>
                <div onClick={ToYoutube} className={styles.icons_item1}><AiOutlineYoutube/></div>
            </li>
        </ul>
        <div className={styles.content}>
        <Routes>
            <Route exact path='/' element={<PaginaInicial/>}></Route>
            <Route path='/Sobre' element={<Sobre/>}></Route>
            <Route path='/Mais-vistos' element={<MaisVistos/>}></Route>
            <Route path='/Contato' element={<Contato/>}></Route>
        </Routes>
        </div>
        </BrowserRouter>
    </nav>
    )
}