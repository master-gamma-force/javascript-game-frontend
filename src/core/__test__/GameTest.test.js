import GameTest from '../TestManager/GameTest';

describe('Test the methods of assert in GameTest', () => {
  describe('Test type equal', () => {
    test('If equal pass, not throw error', () => {
      const gt = new GameTest({
        description: 'test equal',
        type: 'equal',
        value: 1,
        params: [1],
      });
      expect(() => { gt.test(gt.value); }).not.toThrow();
    });
    test('If equal no pass, throw error', () => {
      const gt = new GameTest({
        description: 'test equal',
        type: 'equal',
        value: 1,
        params: [2],
      });
      expect(() => { gt.test(gt.value); }).toThrow();
    });
  });

  describe('Test type deepEqual', () => {
    test('If equal pass, not throw error', () => {
      const gt = new GameTest({
        description: 'test equal',
        type: 'deepEqual',
        value: [1],
        params: [[1]],
      });
      expect(() => { gt.test(gt.value); }).not.toThrow();
    });
    test('If equal no pass, throw error', () => {
      const gt = new GameTest({
        description: 'test equal',
        type: 'deepEqual',
        value: [1],
        params: [[2]],
      });
      expect(() => { gt.test(gt.value); }).toThrow();
    });
  });
});