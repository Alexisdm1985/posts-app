const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// root prueba
app.get('/', (request, response) => {
    response.json({ info: 'prueba numero mil' })
  })


// CRUD
const prueba = app.get('/post', db.getPosts)



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })


module.exports = {
    prueba
}