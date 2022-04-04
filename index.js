const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá mundo')
})

app.get('/raca', (req, res) => {
    res.send('Raça do animal')
})
app.get('/raca/cor', (req, res) => {
    res.send('Cor do animal')
})

app.listen(5000, () => {
    console.log('Servido rodando...')
})