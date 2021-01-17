const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"})
    res.end('<h1>Acho que e melhor usar o Express, nao?</h1>')
})

const PORT = 3456

server.listen(PORT, () => {
    console.log(`Escutando na porta [${PORT}]`)
})