import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import PaginaInicial from '../Pages/PaginaInicial';
import Sobre from '../Pages/Sobre';
import MaisVistos from '../Pages/MaisVistos';
import Contato from '../Pages/Contato';
import logo from '../assets/logo.png';

export default function Navbar(){
    return(
        <nav>
    <img src={logo}alt='Logo'/>
    <BrowserRouter>
     <ul className="list">
      <li className='list-item'><Link to="/">Pagina Inicial</Link></li>
      <li className='list-item'><Link to="/Sobre">Sobre</Link></li>
      <li className='list-item'><Link to="/Mais-vistos">Mais Vistos</Link></li>
      <li className='list-item'><Link to="/Contato">Contato</Link></li>
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