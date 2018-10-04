const { check } = require("express-validator/check")

module.exports = class PlayerHandler {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static validateCreateNewPlayer(req, res, next) {
    return [check("username").isLength({ min: 1, max: 20 })]
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static createNewPlayer(req, res) {
    res.send({ ok: true })
  }

  static validatePlayerJoinGame(req, res, next) {
    return [
      check("PlayerID").isLength({ min: 1 }),
      check("GameID").isLength({ min: 1 }),
    ]
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static playerJoinGame(req, res) {
    res.send({ ok: true })
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static validatePlayerSpectateGame(req, res, next) {
    return [
      check("PlayerID").isLength({ min: 1 }),
      check("GameID").isLength({ min: 1 }),
    ]
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static playerSpectateGame(req, res) {
    res.send({ ok: true })
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static validatePlayerLeaveGame(req, res, next) {
    return [
      check("PlayerID").isLength({ min: 1 }),
      check("GameID").isLength({ min: 1 }),
    ]
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static playerLeaveGame(req, res) {
    res.send({ ok: true })
  }
}
