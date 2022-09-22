import express from 'express'

const server = express()

server.listen(process.env.PORT, async () => {
	console.log(`Trip Planner API listening on port ${process.env.PORT}`)
})