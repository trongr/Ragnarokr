const express = require("express")

const router = (module.exports = express.Router())

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

router.post("/", ValidateCreateNewGameHandler, CreateNewGameHandler)
router.post(
  "/:GameID/player/:PlayerID/unit/:UnitID/move/:x/:y",
  ValidatePlayerMoveHandler,
  PlayerMoveHandler,
)
