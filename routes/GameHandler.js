module.exports = class GameHandler {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static validateCreateNewGame(req, res, next) {}

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static createNewGame(req, res, next) {
    res.send({ ok: true })
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static validatePlayerMove(req, res, next) {}

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static playerMove(req, res, next) {}
}
