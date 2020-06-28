import AbstractLogger from './AbstractLogger'

export default class Logger {
  constructor() {
    this.log = new AbstractLogger()
    this.logErr = new AbstractLogger()
    this.process = new AbstractLogger()
  }

  /**
   * Add a new log
   * @param {Object} log Log info
   */
  newLog(log) {
    this.log.add(log)
  }

  /**
   * Add a new error
   * @param {Object} err err info
   */
  newErr(err) {
    this.logErr.add(err)
  }

  /**
   * Add a new error
   * @param {Object} err err info
   */
  newProcessLog(log) {
    this.process.add(log)
  }

  /**
   * @getter
   * @returns {Object[]} list of errors
   */
  get errors() {
    return this.logErr.getAll()
  }

  /**
   * @getter
   * @returns {Object[]} list of errors
   */
  get logs() {
    return this.log.getAll()
  }

  /**
   * @getter
   * @returns {object[]} list of logs process
   */
  get processLog() {
    return this.process.getAll()
  }

  /**
   * Clean the logger
   */
  clear() {
    this.log.clean()
    this.logErr.clean()
    this.process.clean()
  }
}
