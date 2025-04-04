import axios from "axios";

const favoritosAPI = axios.create({
  baseURL: "http://localhost:8000/favoritos",
});

const getFavoritos = async () => {
  const response = await favoritosAPI.get("/");

  return response.data;
};

const postFavorito = async (id) => {
  await favoritosAPI.post(`/`, { id: Number(id) }); // garante que o ID será número
};
const deleteFavorito = async (id) => {
  try {
    await favoritosAPI.delete(`/${Number(id)}`);
    console.log(`Livro ${id} deletado com sucesso`);
  } catch (error) {
    console.error("Erro ao deletar:", error.response?.data || error.message);
  }
};

export { getFavoritos, postFavorito, deleteFavorito };
