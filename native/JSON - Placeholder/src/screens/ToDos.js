import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import CardToDo from '../components/CardToDo';
import api from '../axios/api';
import Header from '../components/Header';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodosAndUsers = async () => {
      try {
        const [todosResponse, usersResponse] = await Promise.all([
          api.getAllToDos(),
          api.getAllUsers(),
        ]);

        const usersMap = usersResponse.data.reduce((acc, user) => {
          acc[user.id] = user.name;
          return acc;
        }, {});

        setTodos(todosResponse.data);
        setUsers(usersMap);
      } catch (err) {
        setError('Falha ao carregar tarefas ou usuários.');
        console.error('Erro ao buscar tarefas ou usuários:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodosAndUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Carregando tarefas...</Text>
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
      <Header title="Tarefas" />
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardToDo
            title={item.title}
            completed={item.completed}
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

export default Todos;
