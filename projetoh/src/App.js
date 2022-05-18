import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  
  const name = "Alisson".toUpperCase();

  return (
    <div className="App">
     <h1> Seja bem vindo {name}</h1>
     <HelloWorld/>
     <SayMyName name="Junior"/>
     <Pessoa 
     foto='https://via.placeholder.com/150'
     nome="Ella H."
     idade="22"
     descricao="vrtbtbqet4bqterbqterb"/>
      <HelloWorld/>
      <List/>
    </div>
  );
}

export default App;
