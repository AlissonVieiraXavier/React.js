import styles from './Navbar.module.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import PaginaInicial from '../../Pages/PaginaInicial';
import Sobre from '../../Pages/Sobre';
import MaisVistos from '../../Pages/MaisVistos';
import Contato from '../../Pages/Contato';
import logo from '../../assets/logo.png';
import {GoThreeBars} from 'react-icons/go';
import {useState} from 'react';

export default function Navbar(){

    const [notActive,setActive] = useState(true);

    const ToggleToActive = () => (
        setActive(!notActive)
    )

    return(
    <nav className={styles.navbar}>
        <div className={styles.responsive_mobile}>
            <img src={logo} alt='Logo' class={styles.logotipo}/>
             <button  onClick={ToggleToActive} className={styles.btn_burger}> <GoThreeBars/> </button>
        </div>
        <BrowserRouter>
        <ul className={notActive ? styles.list : styles.list_active}>
            <li className={styles.list_item}><Link className={styles.list_item} to="/">Pagina Inicial</Link></li>
            <li className={styles.list_item}><Link className={styles.list_item} to="/Sobre">Sobre</Link></li>
            <li className={styles.list_item}><Link className={styles.list_item} to="/Mais-vistos">Mais Vistos</Link></li>
            <li className={styles.list_item}><Link className={styles.list_item} to="/Contato">Contato</Link></li>
        </ul>
        <Routes>
            <Route exact path='/' element={<PaginaInicial/>}></Route>
            <Route path='/Sobre' element={<Sobre/>}></Route>
            <Route path='/Mais-vistos' element={<MaisVistos/>}></Route>
            <Route path='/Contato' element={<Contato/>}></Route>
        </Routes>
        </BrowserRouter>
    </nav>
    )
}