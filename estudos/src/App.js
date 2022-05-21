import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Formulario from './components/Formulario';
import RenderizaLista from './components/RenderizacaoLista';
import SimpleSlider from './components/Slide'

function App() {

const meusItens = ['react','vue','angular'];


  return (
    <div className="App">
    <Formulario/>
    <Evento/>
    <Condicional/>
    <RenderizaLista itens={meusItens}/>
    <RenderizaLista itens={[]}/>
    <SimpleSlider/>

    </div>
  );
}

export default App;
