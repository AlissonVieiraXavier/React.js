import Logo from "./assets/img/logo.png";
import Header from "./components/Header";
import Animacao from "./components/Animacao";
import AlemDisso from "./components/AlemDisso";

function App() {
  return (
    <div>
      <Header logo={Logo} alt="logotipo" />
      <Animacao/>
      <AlemDisso/>
    </div>
  );
}

export default App;
