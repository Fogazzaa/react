import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  getAllUsers: () => api.get("users"),
  getUserByID: (userId) => api.get(`users/${userId}`),
  getAllPosts: () => api.get("posts"),
  getPostByID: (postId) => api.get(`posts/${postId}`),
  getAllToDos: () => api.get("todos"),
  getToDoByID: (toDoId) => api.get(`todos/${toDoId}`),
};

export default sheets;