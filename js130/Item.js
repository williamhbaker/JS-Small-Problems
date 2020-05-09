class Item {
  constructor(itemName, category, quantity) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.sku = '';
    this.notValid = false;
    this.updateSKU();
    this.validate();
  }

  validate() {
    if (this.itemName.length < 5
        || this.category.length < 5
        || this.category.includes(' ')
        || this.quantity === undefined) this.notValid = true;
  }

  updateSKU() {
    let nameWords = this.itemName.split(' ');
    let firstThree = '';
    if (nameWords[0].length < 3) {
      firstThree = nameWords[0].slice(0, 2) + nameWords[1][0];
    } else {
      firstThree = nameWords[0].slice(0, 3);
    }

    let lastTwo = this.category.slice(0, 2);

    this.sku = (firstThree + lastTwo).toUpperCase();
  }
}

module.exports = Item;