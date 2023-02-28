const express = require('express')
const app = express()

require('dotenv').config()

const medRouter = require('./routes/prod.router.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/produtos", medRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT} rodando...`)
})

app.get("/", (req,res) => {
    res.json("Seja Bem-vindo");
})


//page nao encontrada 
app.use((req, res)=>{
    res.json('NOT FOUND')
} )
