const express = require("express")

const router = (module.exports = express.Router())

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

router.post("/", ValidateCreateNewPlayerHandler, CreateNewPlayerHandler)

router.post(
  "/:PlayerID/JoinGame/:GameID",
  ValidatePlayerJoinGameHandler,
  PlayerJoinGameHandler,
)

router.post(
  "/:PlayerID/SpectateGame/:GameID",
  ValidatePlayerSpectateGameHandler,
  PlayerSpectateGameHandler,
)

router.post(
  "/:PlayerID/LeaveGame/:GameID",
  ValidatePlayerLeaveGameHandler,
  PlayerLeaveGameHandler,
)
