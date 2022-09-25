import express from 'express'

const PORT = process.env.PORT || ''
const server = express()

server.listen(PORT, () => {
  console.log(`Trip Planner API listening on port ${PORT}`)
})
