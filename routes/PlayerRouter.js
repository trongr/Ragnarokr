const ValidatorMiddleware = require("./ValidatorMiddleware.js")
const PlayerHandler = require("./PlayerHandler.js")

module.exports = (app) => {
  app.post(
    "/api/v1/player",
    PlayerHandler.validateCreateNewPlayer,
    ValidatorMiddleware.check,
    PlayerHandler.createNewPlayer,
  )
  app.post(
    "/api/v1/player/:PlayerID/JoinGame/:GameID",
    PlayerHandler.validatePlayerJoinGame,
    ValidatorMiddleware.check,
    PlayerHandler.playerJoinGame,
  )
  app.post(
    "/api/v1/player/:PlayerID/SpectateGame/:GameID",
    PlayerHandler.validatePlayerJoinGame,
    ValidatorMiddleware.check,
    PlayerHandler.playerSpectateGame,
  )
  app.post(
    "/api/v1/player/:PlayerID/LeaveGame/:GameID",
    PlayerHandler.validatePlayerLeaveGame,
    ValidatorMiddleware.check,
    PlayerHandler.playerLeaveGame,
  )
}
