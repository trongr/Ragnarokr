const http = require("http")
const express = require("express")
const expressWinston = require("express-winston")
const bodyParser = require("body-parser")
const path = require("path")
const logger = require("./utils/logger.js")
const Routes = require("./routes")

const app = express()

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    meta: false,
    expressFormat: true,
    colorize: true,
  }),
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("*", (req, res, next) => {
  req.body = { ...req.body, ...req.query }
  next()
})

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`))
})
app.get("/health", (req, res) => res.send({ ok: true }))
app.use("/public", express.static("public"))

Routes.AuthRouter(app)
Routes.PlayerRouter(app)
Routes.GameRouter(app)

const PORT = process.env.PORT || 8080
http.createServer(app).listen(PORT)
logger.error(`SERVER_RESTARTING ${PORT}`)
