
const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'posts'
})


const getPosts = (request, response) => {
    pool.query('SELECT * FROM post', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
  }

const getPostByName = (request, response) => {
    const name = parseInt(request.params.id)

pool.query('SELECT * FROM post WHERE nombre = $1', [name], (error, results) => {
    if (error) {
    throw error
    }
    response.status(200).json(results.rows)
})
}

module.exports = {
    getPosts,
    getPostByName

}