import Logo from "./assets/img/logo.png";
import Header from "./components/Header";
import Animacao from "./components/Animacao";

function App() {
  return (
    <div>
      <Header logo={Logo} alt="logotipo" />
      <Animacao/>
    </div>
  );
}

export default App;
