import { useEffect, useState } from "react";
import api from "../axios/axios";
import { Link } from "react-router-dom";

// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";

// TableBody é onde colocamos o conteúdo
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import Button from "@mui/material/Button";

function listUsuarios() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    // Chamada API
    await api.getUsers().then(
      (response) => {
        console.log(response.data.users);
        setUsers(response.data.users);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listUsers = users.map((user) => {
    return (
      <TableRow key={user.id_usuario}>
        <TableCell align="center">{user.name}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">{user.cpf}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h5>Lista de usuários</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "gray", border: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">CPF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listUsers}</TableBody>
        </Table>
      </TableContainer>
      <Button fullWidth variant="contained" component={Link} to="/">
        Sair
      </Button>
    </div>
  );
}

export default listUsuarios;
