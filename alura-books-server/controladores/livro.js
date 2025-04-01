const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  excluirLivro,
} = require("../servicos/livro");

fs = require("fs");

const getLivros = (req, res) => {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLivro = (req, res) => {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("ID Inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postLivro = (req, res) => {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201);
    res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const patchLivro = (req, res) => {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;

      modificaLivro(body, id);
      res.send("Item modificado com sucesso");
    } else {
      res.status(422);
      res.send("ID Inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLivro = (req, res) => {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      excluirLivro(id);
      res.send("Item excluido com sucesso");
    }else {
        res.status(422)
        res.send("ID Inválido")
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
