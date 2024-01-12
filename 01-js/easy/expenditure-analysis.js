/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // create a map <category, priceSpent>
  // iterate transactions and continue adding the priceSpent
  // iterate through the map and create an object for each category and add to the list
  const op = []
  const categories = new Set();
  for(let transaction of transactions){
    categories.add(transaction.category)
  }

  for(let cat of categories){
    op.push({category : cat, totalSpent : 0})
  }
  for(let cat of categories){
    for(let i = 0 ; i < transactions.length; i++){
      if(transactions[i]["category"] == cat){
        for(let k = 0; k < op.length; k++){
          if(op[k]["category"] == cat){
            op[k]["totalSpent"] +=  transactions[i]["price"]
          }
        }
      }
    }
  }
  
  return op
}

const obj = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
]
calculateTotalSpentByCategory(obj)
module.exports = calculateTotalSpentByCategory;
