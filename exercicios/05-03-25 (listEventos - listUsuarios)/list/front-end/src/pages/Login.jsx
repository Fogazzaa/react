import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import api from "../axios/axios";
import {Link} from "react-router-dom"

function Login() {


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Login();
  };

  async function Login() {
    await api.postLogin(user).then((response) => {
      alert(response.data.message)
    },
  (error)=>{
    console.log(error)
    alert(error.response.data.error)
  });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 20,
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
          Login - VIO
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
          <Link to="/cadastro">Ir para cadastro</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
