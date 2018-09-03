/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function ValidateCreateNewPlayerHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function CreateNewPlayerHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function ValidatePlayerJoinGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function PlayerJoinGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function ValidatePlayerSpectateGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function PlayerSpectateGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function ValidatePlayerLeaveGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function PlayerLeaveGameHandler(req, res, next) {}

module.exports = (app) => {
  app.post(
    "/api/v1/player/",
    ValidateCreateNewPlayerHandler,
    CreateNewPlayerHandler,
  )
  app.post(
    "/api/v1/player/:PlayerID/JoinGame/:GameID",
    ValidatePlayerJoinGameHandler,
    PlayerJoinGameHandler,
  )
  app.post(
    "/api/v1/player/:PlayerID/SpectateGame/:GameID",
    ValidatePlayerSpectateGameHandler,
    PlayerSpectateGameHandler,
  )
  app.post(
    "/api/v1/player/:PlayerID/LeaveGame/:GameID",
    ValidatePlayerLeaveGameHandler,
    PlayerLeaveGameHandler,
  )
}
