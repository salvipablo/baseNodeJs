import express from 'express'

const app = express()

app.use('/', (_req, res) => {
  res.send('Server responding on root path')
})

export default app