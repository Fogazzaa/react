import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getAllPosts: async () => {
    try {
      const response = await apiClient.get('/posts');
      return response.data;
    } catch (error) {
      console.error("Error fetching all posts:", error);
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  },

  getAllTodos: async () => {
    try {
      const response = await apiClient.get('/todos');
      return response.data;
    } catch (error) {
      console.error("Error fetching all todos:", error);
      throw error;
    }
  },
};

export default api;
