
const getTodosLivros = () => {
    return  JSON.parse( fs.readFileSync("livros.json") )

}


module.exports = {
    getTodosLivros
}