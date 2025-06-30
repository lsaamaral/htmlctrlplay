const express = require('express'); // importa o express
const app = express(); // cria aplicacao express 
app.use(express.json()); // permite trabalhar com dados json

// iniciar servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/', (req, res) => {
  res.send('hello world')
})

// post : cria dados
// get : recuperar dados
// put : atualiza dados
// delete : remove dados

let movies = [{id:1, title:"Como treinar seu dragao", genre:"Fantasia", year:2025}, {id:2, title:"Nimona", genre:"Aventura", year:2023}, {id:3, title:"Ratatouille", genre:"Animacao", year:2007}, {id:4, title:"WALL-E", genre:"Animacao", year:2008}];

// rota get para listar
app.get('/read', (req, res) => {
    res.status(200).json(movies); // retorna o array de filmes como resposta
});

app.post('/filmes', (req, res) => {
    const {title, genre, year} = req.body;
    const novoFilme = {id: movies.length + 1, title, genre, year};
    movies.push(novoFilme);
    res.status(201).json(novoFilme);
});

app.put('/filmes/:id', (req, res) => {
    const { id } = req.params;
    console.log("O que foi recebido: ", req.body);
    const { titulo, genero, ano } = req.body;
    const filme = movies.find(f => f.id === parseInt(id));

    if (!filme) return res.status(404).json({ erro: "Filme não encontrado"});
    movies[filme] = { ...movies[filme], "title":titulo, "genre": genero, "year":ano, id };

    res.json(filme);
})

