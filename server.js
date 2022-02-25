const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        {name: 'Bia'},
        {name: 'Dani'}
    ])
})

app.listen('4567')