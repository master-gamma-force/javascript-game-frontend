export default class AbstractLogger {
  constructor() {
    /**
     * @constant log private const.
     */
    const log = [];
    /**
     * Add a entry in private log
     * @param {Object} value Log info
     */
    this.add = (value) => {
      log.push(value);
    };

    /**
     * Get all entries of private log
     * @result {Object[]} all entries list
     */
    this.getAll = () => log;

    /**
     * Clean the private log
     */
    this.clean = () => {
      log.splice(0, log.length);
    };
  }
}