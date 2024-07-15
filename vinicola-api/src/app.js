require("dotenv").config()
const express = require("express")
const port = 3000;
const categoriaRoutes = require("./routes/categoriaRoutes")
const fornecedorRoutes = require("./routes/fornecedorRoutes")
const produtoRoutes = require("./routes/produtoRoutes")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT
const APP_URL = `http://${host}:${porta}`

app.use(express.json())
app.use("/categorias", categoriaRoutes)
app.use("/fornecedores", fornecedorRoutes)
app.use("/produtos", produtoRoutes)

app.listen(porta, () => {
    console.log(`Servidor rodando em ${`http://localhost:${port}`}`)
})