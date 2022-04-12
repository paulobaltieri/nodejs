const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Menu inicial')
})

app.get('/raca', (req, res) => {
    res.send('Raça do animal')
})
app.get('/raca/cor/:corpelo?', (req, res) => {
    const cor = req.params.corpelo
    if (cor === undefined) {
        res.send('A cor do dog não foi incormada')
    } else {
        res.send(`A cor do dog é ${cor}`)
    }
})

app.listen(3000, () => {
    console.log('Servidor funcionando!')
})