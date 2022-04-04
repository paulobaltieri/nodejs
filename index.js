const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá mundo')
})
app.get('/animal/:nome/:sobrenome', (req, res) => {
    const nome = req.params.nome
    const sobrenome = req.params.sobrenome
    res.send(`Olá ${nome} ${sobrenome}`)
})
app.get('/raca/:nome?', (req, res) => {
    const rac = req.params.nome
    if (rac) {
        res.send('Raça do animal')
    } else {
        res.send('A raça não foi informada')
    }

})
app.get('/raca/cor', (req, res) => {
    res.send('Cor do animal')
})

app.listen(5000, () => {
    console.log('Servido rodando...')
})

//req = Dados enviados pelo usuario
//res = resposta que vai ser enviada para o usuario