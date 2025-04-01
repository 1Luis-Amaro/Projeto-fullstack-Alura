
const getTodosLivros = () => {
    return  JSON.parse( fs.readFileSync("livros.json") )

}

const getLivroPorId = (id) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id ) [0]
    return livroFiltrado
}

const insereLivro = (livroNovo) => {
    const livros = JSON.parse(fs.readFileSync("livros.json")) 

    const novaListaDeLivros = [...livros, livroNovo] 

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

const modificaLivro = (modificacoes, id) =>  {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json")) 
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

const excluirLivro = (id) => {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json")) 
    const indiceModificado = livrosAtuais.filter(livro => livro.id !== id)


    fs.writeFileSync("livros.json", JSON.stringify(indiceModificado))

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    excluirLivro
}