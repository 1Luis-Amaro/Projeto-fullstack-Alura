const {
  getTodosFavoritos,
  insereLivroFavorito,
} = require("../servicos/favorito");

const getFavoritos = (req, res) => {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postFavorito = (req, res) => {
  try {
      const id = req.body.id;
    const livros = getTodosFavoritos();
    const idExistente = livros.some((livro) => livro.id === id);
    if (idExistente) {
      return res.status(422).send("Esse ID já existe");
    } 
    
      insereLivroFavorito(id);
      res.status(201);
      res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteFavorito = (req, res) => {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletaFavoritoPorId(id);
      res.send("favorito excluido com sucesso");
    } else {
      res.status(422);
      res.send("ID Inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito,
};
