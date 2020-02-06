 // input:  a numerical inventory item and an array list of transactions
 // output:  true or false based on whether an inventory item is available
 // algorithm: Return all transactions with the given id. Sum up the qunatities
 // of each, return true if it is positive. If the movement property is 'out',
 // the quantity is subtracted, if 'in' it is added

function isItemAvailable(inventoryId, transactionList) {

  var finalQuantity = transactionsFor(inventoryId, transactionList).reduce(function(sum, transaction) {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);
  return finalQuantity > 0;
}



function transactionsFor(itemId, transactionList) {
  return transactionList.filter(function (item) {
    return item["id"] === itemId;
  });
}
 var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                      { id: 105, movement: 'in',  quantity: 10 },
                      { id: 102, movement: 'out', quantity: 17 },
                      { id: 101, movement: 'in',  quantity: 12 },
                      { id: 103, movement: 'out', quantity: 15 },
                      { id: 102, movement: 'out', quantity: 15 },
                      { id: 105, movement: 'in',  quantity: 25 },
                      { id: 101, movement: 'out', quantity: 18 },
                      { id: 102, movement: 'in',  quantity: 22 },
                      { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
