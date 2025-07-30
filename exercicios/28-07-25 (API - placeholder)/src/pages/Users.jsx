// src/components/Users.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import api from '../axios/api';
import CardUsers from '../components/CardUsers';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Users() {
  const styles = getStyles();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      setError("Erro ao carregar os usuários.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = "users";
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container component="main" sx={styles.container}>
      <Header />
      <Box sx={styles.body}>
        <Box sx={styles.dataDisplayBox}>
          <Typography component="h1" variant="h5" sx={styles.title}>
            Lista de Usuários
          </Typography>

          {loading && <Typography>Carregando...</Typography>}
          {error && <Typography color="error">{error}</Typography>}

          {users.length > 0 ? (
            <Box sx={styles.itemsContainer}>
              {users.map((userItem) => (
                <CardUsers key={userItem.id} user={userItem} />
              ))}
            </Box>
          ) : (
            !loading && !error && <Typography>Nenhum usuário encontrado.</Typography>
          )}

          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={styles.buttonBack}
          >
            Voltar ao Início
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
      padding: '20px 0',
    },
    dataDisplayBox: {
      backgroundColor: "white",
      padding: "10px 50px",
      borderRadius: "20px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      width: "110%",
      maxWidth: "700px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
      textAlign: "center",
    },
    itemsContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      maxHeight: '60vh',
      overflowY: 'auto',
      paddingRight: '10px',
    },
    buttonBack: {
      marginTop: 2,
      backgroundColor: "rgba(255, 0, 0, 1)",
      color: "white",
      fontWeight: 600,
      borderRadius: 10,
      textTransform: "none",
      '&:hover': {
        backgroundColor: "rgba(200, 0, 0, 1)",
      },
    },
  };
}

export default Users;
