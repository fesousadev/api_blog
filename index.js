const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
.then(console.log('MongoDB Conected!'))
.catch(err=> console.log(err))

app.use('/', (req, res)=> {
  console.log('Aqui tudo ok na rota!')
})

app.listen("3000", ()=> {
  console.log('server online!')
})