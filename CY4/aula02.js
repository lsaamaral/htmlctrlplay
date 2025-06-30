// Array com os dados (filmes)
let movies = [{id:1, title:"Como treinar seu dragao", genre:"Fantasia", year:"2025"}, {id:2, title:"Nimona", genre:"Aventura", year:"2023"}];

// Como adicionar um dado
function adicionarFilme(filme) {
    if (!filme.id){
        console.log("Erro: o filme precisa ter um id");
        return;
    }

    let existe = movies.find(movie => movie.id === filme.id);
    if (existe) {
        console.log(`ERRO: ja existe um filme com o id ${filme.id}`);
        return;
    }

    movies.push(filme);
    console.log(`Filme ${filme.title} adicionado`);
}

movies.push({id:3, title:"Ratatouille", genre:"Animacao", year:"2007"});


let obj = {id:4, title:"WALL-E", genre:"Animacao", year:"2008"}
movies.push(obj);

// console.log(movies);

// Como listar os dados
// movies.forEach(movie => {console.log(`Titulo: ${movie.title}, Genero: ${movie.genre}, Ano: ${movie.year}`);});

// Como atualizar os dados
let movieToUpdate = movies.find(movie => movie.id === 2);
if (movieToUpdate) {
    movieToUpdate.genre = "Animação";
    // console.log(`Filme atualizado: ${movieToUpdate.title}, Genero: ${movieToUpdate.genre}`);
}
// console.log(movies);

// Como remover
let index = movies.findIndex(movie => movie.id === 7);
if (index !== -1) {
    console.log(`Filme removido: ${movies[index].title}`);
    movies.splice(index, 1);
}
console.log(movies);
