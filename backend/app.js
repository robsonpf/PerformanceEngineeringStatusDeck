const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./query/db')
const cors = require('cors')
require('dotenv').config()

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const slideRoute = require("./src/routers/slide")
// const monthReleaseRoute = require("./src/routers/monthRelease")
// const projectRoute = require("./src/routers/project")
// const projectUpdateRoute = require("./src/routers/projectUpdate")

app.use("/slide", slideRoute)
// app.use("/monthRelease", monthReleaseRoute)
// app.use("/project", projectRoute)
// app.use("/projectUpdate", projectUpdateRoute)

app.use((err, req, res, next) => {
  console.error(err.stack)
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: "Not found"})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exports = app
