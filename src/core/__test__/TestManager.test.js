import TestManager from '../TestManager/TestManager';
import GameTest from '../TestManager/GameTest';

describe('Test load test in TestManager', () => {
  describe("If any test doesn't have all attributes, throw a error", () => {
    const dataTest = [
      {
        description: 'Hello',
        type: 'equal',
        value: 1,
        params: [1],
      },
      {
        description: 'world',
        type: 'equal',
        value: 1,
        params: [1],
      },
    ];

    test("A test doesn't have description", () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      delete data[1].description;
      expect(() => { const tm = new TestManager(data); }).toThrow("Test doesn't have the structure of GameTest class");
    });

    test("A test doesn't have type", () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      delete data[1].type;
      expect(() => { const tm = new TestManager(data); }).toThrow("Test doesn't have the structure of GameTest class");
    });

    test("A test doesn't have value", () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      delete data[1].value;
      expect(() => { const tm = new TestManager(data); }).toThrow("Test doesn't have the structure of GameTest class");
    });

    test("A test doesn't have params", () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      delete data[1].params;
      expect(() => { const tm = new TestManager(data); }).toThrow("Test doesn't have the structure of GameTest class");
    });
  });

  describe('Test if all tests have been loaded ', () => {
    const data = [
      {
        description: 'Hello',
        type: 'equal',
        value: 1,
        params: [1],
      },
      {
        description: 'world',
        type: 'equal',
        value: 1,
        params: [1],
      },
    ];

    test('Load all test', () => {
      const tm = new TestManager(data);
      expect(tm.tests.length).toBe(2);
    });

    test('All test could be instance of GameTest', () => {
      const tm = new TestManager(data);
      for (let i = 0; i < tm.tests.length; i += 1) {
        expect(tm.tests[i]).toBeInstanceOf(GameTest);
      }
    });
  });

  describe('Test run test', () => {
    const dataTest = [
      {
        description: 'Hello',
        type: 'equal',
        value: 1,
        params: [1],
      },
      {
        description: 'world',
        type: 'equal',
        value: 1,
        params: [1],
      },
    ];

    test('Run test no throw errors', () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      const tm = new TestManager(data);
      expect(() => (tm.run())).not.toThrow();

      const data2 = JSON.parse(JSON.stringify(dataTest));
      data2[1].value = 2;
      const tm2 = new TestManager(data2);
      expect(() => (tm2.run())).not.toThrow();
    });

    test('Test output all pass', () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      const tm = new TestManager(data);
      tm.run();
      expect(tm.log.logs.length).toBe(2);
      expect(tm.log.errors.length).toBe(0);
    });

    test('Test output any fail', () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      data[1].value = 2;
      const tm = new TestManager(data);
      tm.run();
      expect(tm.log.logs.length).toBe(1);
      expect(tm.log.errors.length).toBe(1);
    });

    test('Test output all fail', () => {
      const data = JSON.parse(JSON.stringify(dataTest));
      data[0].value = 2;
      data[1].value = 2;
      const tm = new TestManager(data);
      tm.run();
      expect(tm.log.logs.length).toBe(0);
      expect(tm.log.errors.length).toBe(2);
    });
  });
});
