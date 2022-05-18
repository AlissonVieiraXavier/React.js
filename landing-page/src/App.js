import './App.css';
import Logo from './assets/img/logo.png';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
   <Header logo={Logo} alt="logotipo"/>
    </div>
  );
}

export default App;
