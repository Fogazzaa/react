
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      <Link to="/eventos">Lista de Eventos</Link>
      <Link to="/organizadores">Lista de Organizadores</Link>
      <Link to="/ingressos">Lista de Ingressos</Link>
      <Link to="/evento/novo">Criar Evento</Link>
    </div>
  );
}

export default Home;
