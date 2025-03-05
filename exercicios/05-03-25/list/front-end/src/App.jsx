import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsuarios from "./pages/listUsuarios";
import ListEventos from "./pages/listEventos";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/usuarios" element={<ListUsuarios />} />
          <Route path="/eventos" element={<ListEventos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
