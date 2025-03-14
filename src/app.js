import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  console.log('Me llego peticion a la raiz del proyecto');
  res.send('Server responding on root path')
})

export default app