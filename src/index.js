import app from "./app.js"

const PORT = 3000

const main = () => {
  try {
    app.listen(PORT)
    console.log(`Server listening on port: http://localhost:${PORT}/`)
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}.`)
  }
}

main()
