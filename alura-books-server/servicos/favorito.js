const fs = require("fs")

const getTodosFavoritos = () => {
    return  JSON.parse( fs.readFileSync("favoritos.json") )

}

const  deletaFavoritoPorId = (id) => {
    let livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    const deleteLivro = livrosFavoritos.filter(livros => livros.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(deleteLivro))
    
}

const insereLivroFavorito = (id) => {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    let favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    
    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereLivroFavorito,
}