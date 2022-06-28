import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PaginaInicial from './Pages/PaginaInicial';
import Sobre from './Pages/Sobre';
import MaisVistos from './Pages/MaisVistos';
import Contato from './Pages/Contato/Contato';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="app">
        <BrowserRouter>  
        <Navbar/>       
        <Routes>
            <Route exact path='/' element={<PaginaInicial/>}></Route>
            <Route path='/Sobre' element={<Sobre/>}></Route>
            <Route path='/Mais-vistos' element={<MaisVistos/>}></Route>
            <Route path='/Contato' element={<Contato/>}></Route>
        </Routes>
        </BrowserRouter>
        <Footer/>
        
    </div>
  );
}

export default App;
