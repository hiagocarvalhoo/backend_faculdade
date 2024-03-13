const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const lista1 = require('./routes/lista1')

app.use('/lista1', lista1)

app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome', function(req, res){
    res.send('Orion Teles de Mesquita')
})

app.listen(3000, function(){
    console.log('Server UP port 3000')
})