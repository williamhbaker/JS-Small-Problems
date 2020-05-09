let transactionsFor = function(ident, transactions) {
  return transactions.filter((trans) => trans.id === ident);
};

let isItemAvailable = function(ident, transactions) {
  return transactionsFor(ident, transactions).reduce((sum, trans) =>
    sum + (trans.movement === 'in' ? trans.quantity : -trans.quantity)
  , 0) > 0;
};

let isItemAvailable1 = function(ident, transactions) {
  return transactionsFor(ident, transactions)
    .map((trans) => (trans.movement === 'in' ? trans.quantity : -trans.quantity))
    .reduce((sum, elem) => sum + elem ) > 0;
};

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
{ id: 105, movement: 'in',  quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in',  quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in',  quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in',  quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true