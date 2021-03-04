const express = require('express')
const app = express()

const listaUsuarios = [ 
    
        'Ivens',
        'Jaison',
        'Maria',
        'Natalia',
        'Ariel',
        'Nykolle'
]
    

// Query Params
// Ex: Localhost:3000/usuarios?id=1

app.get('/usuarios', (req, res) => {
    const {nome} =  req.query
    let listaDeRetorno = listaUsuarios.filter(i => i.includes(nome || ''))
    return res.json(listaDeRetorno)
});


// Route Params
// Ex: ecommer.com.br/produtos/4/detalhes

app.get('/:usuario', (req, res) => {
    const { usuario } = req.params;
    
    return res.send(`Bem vindo! ${usuario}`)
})

app.listen(3000, () => {
    console.log('Servidor rodando na pora 3000...')
})