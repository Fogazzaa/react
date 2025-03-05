import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsers from "./pages/listUsers";
import ListEventos from "./pages/listEventos";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<ListUsers />} />
          <Route path="/eventos" element={<ListEventos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
