// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const styles = getStyles();

  return (
    <Container component="main" sx={styles.container}>
      <Header />
      <Box sx={styles.body}>
        <Box sx={styles.menuBox}>
          <Typography component="h1" variant="h4" sx={styles.title}>
            Bem-vindo!
          </Typography>
          <Typography variant="body1" sx={styles.subtitle}>
            Escolha uma seção para explorar dados da API.
          </Typography>
          <Button
            component={Link}
            to="/posts"
            variant="contained"
            sx={styles.button}
          >
            Ver Postagens
          </Button>
          <Button
            component={Link}
            to="/users"
            variant="contained"
            sx={styles.button}
          >
            Ver Usuários
          </Button>
          <Button
            component={Link}
            to="/todos"
            variant="contained"
            sx={styles.button}
          >
            Ver Tarefas (Todos)
          </Button>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

function getStyles() {
  return {
    container: {
      backgroundImage: `url(../../img/fundo.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      minWidth: "100%",
      padding: 0,
    },
    body: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: '20px',
    },
    menuBox: {
      backgroundColor: "white",
      padding: "40px 30px",
      borderRadius: "20px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
      textAlign: "center",
    },
    subtitle: {
      fontSize: "18px",
      marginBottom: "20px",
      color: "#666",
      textAlign: "center",
    },
    button: {
      backgroundColor: "rgba(255, 0, 0, 1)",
      color: "white",
      fontWeight: 600,
      borderRadius: 10,
      textTransform: "none",
      width: "100%",
      padding: "12px 0",
      '&:hover': {
        backgroundColor: "rgba(200, 0, 0, 1)",
      },
    },
  };
}

export default Home;
