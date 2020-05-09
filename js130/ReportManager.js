class ReportManager {
  constructor(itemMngr) {
    this.mngr = itemMngr;
  }

  createReporter(sku) {
    let thisItem = this.mngr.findItem((item) => item.sku === sku);

    return {
      itemInfo() {
        Object.keys(thisItem).forEach((key) => {
          console.log(`${key}: ${thisItem[key]}`);
        });
      },
    };
  }

  reportInStock() {
    console.log(this.mngr.inStock());
  }

}

module.exports = ReportManager;