import express, { Request, Response } from 'express'

const PORT = process.env.PORT || ''
const server = express()

server.get('/health', (req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    currentTime: new Date(),
  }

  return res.status(200).send(data)
})

server.listen(PORT, () => {
  console.log(`Trip Planner API listening on port ${PORT}`)
})
