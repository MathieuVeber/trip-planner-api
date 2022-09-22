import express from 'express'

const PORT = 8080
const server = express()

server.listen(PORT, async () => {
	console.log(`Trip Planner API listening on port ${PORT}`)
})