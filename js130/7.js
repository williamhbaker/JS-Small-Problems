"use strict";

let Item = require('./Item.js');
let ReportManager = require('./ReportManager.js');


class ItemManager {
  constructor() {
    this.items = [];
  }

  create(itemName, category, quantity) {
    let item = new Item(itemName, category, quantity);
    if (!item.notValid) {
      this.items.push(item);
      return true;
    }

    return false;
  }

  findItem(callback) {
    return this.items.find(callback);
  }

  filterItems(callback) {
    return this.items
            .filter(callback)
            .map((item) => item.itemName)
            .join(',');
  }

  update(sku, newProps) {
    Object.assign(this.findItem((item) => item.sku === sku), newProps);
  }

  delete(sku) {
    let delIdx = this.items.indexOf(this.findItem((item) => item.sku === sku));
    this.items.splice(delIdx, 1);
  }

  inStock() {
    return this.filterItems((item) => item.quantity > 0);
  }

  itemsInCategory(category) {
    return this.filterItems((item) => item.category === category);
  }
}

module.exports = {
  Item,
  ItemManager,
  ReportManager,
};