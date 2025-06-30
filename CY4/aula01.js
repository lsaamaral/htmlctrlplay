// console.log("Hello World!");
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200; // indica que a resposta foi bem sucedida
        res.setHeader('Content-Type', 'text/plain'); // define o formato da resposta
        res.end('Pagina inicial do site, bem vindo!');
    } else if (req.url === '/mensagens') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Aqui estao as suas mensagens.');
    } else {
        res.statusCode = 404; // codigo de status para erro
        res.setHeader('Content-Type', 'text/plain');
        res.end('Erro 404: Pagina nao encontrada.');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

