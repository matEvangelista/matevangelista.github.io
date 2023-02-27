import './App.css';
import Apresentacao from './components/Apresentacao';
import CardContainer from './components/CardContainer';
import Contato from './components/Contato';
import Cursos from './components/Cursos';
import Habilidades from './components/Habilidades';
import Navbar from './components/Navbar';
import ProjetoCard from './components/ProjetoCard';
import Sobre from './components/Sobre';


function App() {
  return (
    <>
      <Navbar />
      <Apresentacao />
      <CardContainer />
      <Habilidades />
      <Cursos />
      <Contato/>
      <Sobre />
    </>
  );
}

export default App;
