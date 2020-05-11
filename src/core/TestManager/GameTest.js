import { assert } from 'chai';

export default class GameTest {
  /**
   * Create a new test with chai
   * @param {string} description description of test
   * @param {string} type chai method
   * @param {Object[]} params chai params of chai method
   */
  constructor({
    description, type, value, params,
  }) {
    this.description = description;
    this.value = value;
    this.test = (values) => {
      assert[type](values, ...params);
    };
  }
}
