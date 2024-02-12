const express = require('express') /*Importa o Express*/
const route = require('./route') /*Importa o Route*/
const path = require('path') /*Modulo Path para achar o views dentro de src*/

const server = express() /*Executa e Guarda o Express no Server*/

server.set('view engine', 'ejs') /*Mostrar quem é responsavel pelo view, nesse caso o ejs*/

server.use(express.static("public")) /*Express usa estaticamente a pasta public*/

server.set('views', path.join(__dirname, 'views')) /*Está indicando o caminho até a pasta Views, _dirname vai se tornar o src*/

server.use(express.urlencoded({extended: true}))

server.use(route) /*Falar pro JS usar a rota Route*/

server.listen(3000, () => console.log("RODANDO")) /*listen é uma funcionalidade dentro do Express*/