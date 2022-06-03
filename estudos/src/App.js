import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/Contact-us';

function App() {

//const meusItens = ['react','vue','angular'];


  return (
    //componentes padrão(que não mudam)
    <Router>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/About">About</Link></li>
         <li><Link to="/Contact-us">Contact us</Link></li>
       </ul>

       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Contact-us" element={<ContactUs/>}/>
       </Routes>
    </Router>
  );
}

export default App;
