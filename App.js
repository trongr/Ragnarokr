const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const logger = require("./utils/logger.js")
const AuthRouter = require("./routes/AuthRouter.js")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/public", express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`))
})
app.get("/health", (req, res) => res.send({ ok: true }))

app.use("/api/v1/auth", AuthRouter)

const port = process.env.PORT || 8080
http.createServer(app).listen(port)
logger.info(`LISTENING_ON_PORT: ${port}`)
