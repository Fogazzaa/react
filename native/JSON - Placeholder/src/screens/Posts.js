import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import CardPost from '../components/CardPost';
import sheets from '../axios/api';
import Header from '../components/Header';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          sheets.getAllPosts(),
          sheets.getAllUsers(),
        ]);

        const usersMap = usersResponse.data.reduce((acc, user) => {
          acc[user.id] = user.name;
          return acc;
        }, {});

        setPosts(postsResponse.data);
        setUsers(usersMap);
      } catch (err) {
        setError('Falha ao carregar posts ou usuários.');
        console.error('Erro ao buscar posts ou usuários:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsAndUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#000000ff" />
        <Text style={styles.loadingText}>Carregando posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Posts" />
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardPost
            title={item.title}
            body={item.body}
            userName={users[item.userId] || 'Desconhecido'}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  listContent: {
    paddingVertical: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 17,
    color: '#555555',
    fontWeight: '500',
  },
  errorText: {
    fontSize: 17,
    color: '#DC3545',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Posts;
