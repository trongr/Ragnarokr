const { validationResult } = require("express-validator/check")

module.exports = class ValidatorMiddleware {
  /**
   * Check result of validator middlewares.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static check(req, res, next) {
    const errors = validationResult(req)
    if (errors.isEmpty) return next()
    res.send({
      status: 400,
      error: "ValidatorMiddleware__INVALID_INPUT",
      info: errors.array(),
    })
  }
}
