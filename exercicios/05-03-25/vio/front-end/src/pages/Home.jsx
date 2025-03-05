
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

function Home() {

  return (
    <div>
      <h1>Home</h1>
      <h3>Lista de Eventos</h3>
      <Button  variant="contained" component={Link} to="/eventos">
        Lista de Eventos
      </Button>
      <h3>Lista de Organizadores</h3>
      <Button  variant="contained" component={Link} to="/organizadores">
        Lista de Organizadores
      </Button>
      <h3>Lista de Ingressos</h3>
      <Button  variant="contained" component={Link} to="/ingressos">
        Lista de Ingressos
      </Button>
      <h3>Crie Eventos</h3>
      <Button  variant="contained" component={Link} to="/evento/novo">
        Crie Eventos
      </Button>
    </div>
  );
}

export default Home;
