const ValidatorMiddleware = require("./ValidatorMiddleware.js")
const GameHandler = require("./GameHandler.js")

module.exports = (app) => {
  app.get(
    "/api/v1/game",
    // GameHandler.validateCreateNewGame,
    // ValidatorMiddleware.check,
    GameHandler.createNewGame,
  )
  app.post(
    "/api/v1/game/:GameID/player/:PlayerID/unit/:UnitID/move/:x/:y",
    GameHandler.validatePlayerMove,
    ValidatorMiddleware.check,
    GameHandler.playerMove,
  )
}
