/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function ValidateCreateNewGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function CreateNewGameHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function ValidatePlayerMoveHandler(req, res, next) {}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function PlayerMoveHandler(req, res, next) {}

module.exports = (app) => {
  app.post("/api/v1/game", ValidateCreateNewGameHandler, CreateNewGameHandler)
  app.post(
    "/api/v1/game/:GameID/player/:PlayerID/unit/:UnitID/move/:x/:y",
    ValidatePlayerMoveHandler,
    PlayerMoveHandler,
  )
}
