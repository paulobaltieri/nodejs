const express = require('express')
const app = express()

app.get('/nome', (req, res) => {
    res.send('Nome do animal')
})
app.get('/raca', (req, res) => {
    res.send('Raca do animal')
})
app.get('/porte', (req, res) => {
    res.send('Porte do animal')
})
app.get('/proprietario/:nomeprop', (req, res) => {
    const propt = req.params.nomeprop
    res.send(`Proprietario: ${propt}`)
})
app.get('/pelagem/:corpelo?', (req, res) => {
    const corpelagem = req.params.corpelo
    if (corpelagem != undefined) {
        res.send(`Pelagem do cachorro: ${corpelagem}`)
    } else {
        res.send('A cor do pelo não foi informada! 😲 ')
    }

})
app.listen(3000, () => {
    console.log('Servidor rodando...')
})