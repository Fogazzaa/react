import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Cadastro() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Nome: " +
        user.name +
        "  -  E-mail: " +
        user.email +
        "  -  Idade: " +
        user.age +
        "  -  Senha: " +
        user.password
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "#000000",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro - VIO
        </Typography>
        <Box
          component="form"
          sx={{
            mt: 1,
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            required
            fullWidth
            id="name"
            label="nome"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="e-mail"
            name="email"
            margin="normal"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="age"
            label="idade"
            name="age"
            margin="normal"
            type="number"
            value={user.age}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="senha"
            name="password"
            type="password"
            margin="normal"
            value={user.password}
            onChange={onChange}
          />
          <Button
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              backgroundColor: "#000000",
              display: "flex",
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;
