import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
  
  const name = "Alisson".toUpperCase();

  return (
    <div className="App">
     <h1> Seja bem vindo {name}</h1>
     <HelloWorld/>
     <SayMyName/>
    </div>
  );
}

export default App;
