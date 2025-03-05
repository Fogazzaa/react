import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  headers: { accept: "application/json" },
});

const sheets = {
  getUsers: () => api.get("user/"),
  getEventos: () => api.get("evento/"),
  postLogin: () => api.get("login/"),
  postCadastro: () => api.get("user/"),
};

export default sheets;
