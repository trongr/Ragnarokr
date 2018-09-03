const { createLogger, format, transports } = require("winston")

/* eslint-disable-next-line */
require("winston-papertrail").Papertrail

const { combine, timestamp, label, printf } = format

const LoggerConf = {
  production: {
    level: process.env.LOG_VERBOSITY || "warning",
    colorize: false,
  },
  development: {
    level: process.env.LOG_VERBOSITY || "info",
    colorize: false,
  },
  staging: {
    level: process.env.LOG_VERBOSITY || "info",
    colorize: false,
  },
  local: {
    level: process.env.LOG_VERBOSITY || "info",
    colorize: true,
  },
}[process.env.NODE_ENV || "local"]

const logFormat = printf((info) => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
})

const labelConf = { label: process.env.LOG_LABEL || "APP" }

const consoleTransport = new transports.Console({
  level: LoggerConf.level,
  format: combine(label(labelConf), timestamp(), format.colorize(), logFormat),
})

const fileCombinedTransport = new transports.File({
  level: "info",
  filename: "./logs/combined.log",
  format: combine(label(labelConf), timestamp(), logFormat),
})

const fileErrorTransport = new transports.File({
  level: "error",
  filename: "./logs/error.log",
  format: combine(label(labelConf), timestamp(), logFormat),
})

const logger = createLogger({
  transports: [fileErrorTransport, fileCombinedTransport],
})

if (process.env.NODE_ENV !== "production") {
  logger.add(consoleTransport)
}

module.exports = logger
