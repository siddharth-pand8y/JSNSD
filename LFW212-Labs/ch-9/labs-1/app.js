'use strict'
const express = require('express')
const app = express()
const router = express.Router()
const { PORT = 3000 } = process.env

router.get('/', (req, res) => {
  setTimeout(() => {
    const un = req.query?.un
    if (un && Array.isArray(un)) res.send(un.map((u) => u.toUpperCase()))
    else if (un && typeof un === 'string') res.send(un.toUpperCase())
    else res.send('')
  }, 1000)
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
