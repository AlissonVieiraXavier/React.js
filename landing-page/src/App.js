import Logo from "./assets/img/logo.png";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header logo={Logo} alt="logotipo" />
    </div>
  );
}

export default App;
