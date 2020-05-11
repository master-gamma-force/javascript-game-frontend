import Logger from '../TestManager/Logger';

describe('Test the Logger class', () => {
  describe('Test methods', () => {
    const logger = new Logger();

    test('Test log', () => {
      logger.newLog('Hello world');
      expect(logger.logs).toEqual(['Hello world']);
    });

    test('Test add a error', () => {
      logger.newErr('Hello world');
      expect(logger.errors).toEqual(['Hello world']);
    });
    test('Test clean log',() => {
      logger.clear();
      expect(logger.logs).toEqual([]);
      expect(logger.errors).toEqual([]);
    });
  });
});
