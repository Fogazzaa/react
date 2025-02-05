import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

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
    alert('email:' + user.email + ' - senha:' + user.password)
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "red",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Vio
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
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <Button
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              backgroundColor: "red",
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

export default Login;
