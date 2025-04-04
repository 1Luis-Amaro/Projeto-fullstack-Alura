const fs = require("fs")

const getTodosFavoritos = () => {
    return  JSON.parse( fs.readFileSync("favoritos.json") )

}

const  deletaFavoritoPorId = (id) => {
    let livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    const deleteLivro = livrosFavoritos.filter(livros => Number(livros.id) !== Number(id))
    fs.writeFileSync("favoritos.json", JSON.stringify(deleteLivro))
    
}

const insereLivroFavorito = (id) => {
    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereLivroFavorito,
}