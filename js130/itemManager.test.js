/* eslint-disable max-lines-per-function */
let { Item, ItemManager, ReportManager } = require('./7.js');

describe('ItemManager Tests', () => {
  let testManager;
  beforeEach(() => {
    testManager = new ItemManager();
    testManager.create('basket ball', 'sports', 0);
    testManager.create('soccer ball', 'sports', 5);
    testManager.create('football', 'sports', 3);
  });

  test('Valid items can be added', () => {
    expect(testManager.items.length).toBe(3);
  });

  test('Invalid items cannot be added', () => {
    testManager.create('asd', 'sports', 0);
    testManager.create('football', 'sports');
    testManager.create('kitchen pot', 'cooking items', 0);
    expect(testManager.items.length).toBe(3);
  });

  test('ItemManager can update items', () => {
    testManager.update('SOCSP', { quantity: 0 });
    expect(testManager.items[1].quantity).toBe(0);
    expect(testManager.items[1].category).toBe('sports');
    expect(testManager.items[1].itemName).toBe('soccer ball');
  });

  test('Item manager can delete items', () => {
    testManager.delete('SOCSP');
    expect(testManager.items.length).toBe(2);
  });

  test('Item manager can list in stock items', () => {
    expect(testManager.inStock()).toBe('soccer ball,football');
  });

  test('Item manager can list items by category', () => {
    expect(testManager.itemsInCategory('sports'))
      .toBe('basket ball,soccer ball,football');
  });
});

describe('ReportManager tests', () => {
  let testManager;
  let testReporter;

  beforeEach(() => {
    testManager = new ItemManager();
    testManager.create('basket ball', 'sports', 0);
    testManager.create('soccer ball', 'sports', 5);
    testManager.create('football', 'sports', 3);
    testReporter = new ReportManager(testManager);
  });

  test('createReporter returns an object', () => {
    expect(typeof testReporter.createReporter()).toBe('object');
  });

});