// src/components/Posts.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import api from '../axios/api';
import CardPost from '../components/CardPost';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Posts() {
  const styles = getStyles();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getAllPosts();
      setPosts(data);
    } catch (err) {
      console.error("Erro ao buscar postagens:", err);
      setError("Erro ao carregar as postagens.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = "posts";
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Container component="main" sx={styles.container}>
      <Header />
      <Box sx={styles.body}>
        <Box sx={styles.dataDisplayBox}>
          <Typography component="h1" variant="h5" sx={styles.title}>
            Lista de Postagens
          </Typography>

          {loading && <Typography>Carregando...</Typography>}
          {error && <Typography color="error">{error}</Typography>}

          {posts.length > 0 ? (
            <Box sx={styles.itemsContainer}>
              {posts.map((postItem) => (
                <CardPost key={postItem.id} post={postItem} />
              ))}
            </Box>
          ) : (
            !loading && !error && <Typography>Nenhuma postagem encontrada.</Typography>
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
      width: "120%",
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

export default Posts;
