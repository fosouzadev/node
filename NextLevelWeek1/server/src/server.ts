import express from 'express'
const app = express()

app.get('/users', (request, response) => {
    response.json(['Felipe', 'Sabrina'])
})




app.listen(333);