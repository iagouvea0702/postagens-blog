//http routes statements
const express = require('express')
const app = express()
const PORT = 3000

//template engine statements
const handlebars = require('express-handlebars')

//body-parser statements
const bodyParser = require('body-parser')

const Post = require('./models/Post.js')

//Settings
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

//Routes
    app.get('/cad', (req, res) =>{
        res.render('formulario')
    })

    app.get('/', (req, res) =>{
        res.render('home')
    })

    app.post('/add', (req, res) =>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() =>{
            res.redirect('/cad')
        }).catch(() =>{
            res.send('<h1>Error adding post!<h1/>')})
    })



 app.listen(PORT,() => {
     console.log(`Server running in URL: http://localhost:${PORT}`)
 })