 // input: a sorted list array of elements(strings or numbers) and an element to search for in
 // the list.
 // output: the index of the searchItem, or -1 if none exists.
 // rules:
 // find the middle value (Math.floor) of the array
 // if the middle value is equal to the search item, return the index
 // if the middle vlaue is less than the search item, discard the lower half including the middle value
 // if the middle value is greater than the search item, discard the upper half including the middle value
 // repeat the process using the remaining half as the array.
 // stop when the middle value is equal to the search item and return that index
 // or return -1 if the search item is not found (the last array to search is has one element
// and it is not equal to the search item.)

 // algorithm:
 // find the middle element in the original array.
 //   Take the element at index half the length truncated for
 //   odd values and half the length - 1 for even values
 // keep track of the middle value index as a var middle value absolute
 // Compare the search item to the middle element
 //   If the search item is equal to the middle element, return the index of the
 //   middle value absolute variable
 //   If the middle value is less than the search item, slice the array at 1 + the middle value
 //   and assign to an array to search variable.
 //   If the middle value is greater than the search item, slice the array at 0 to middle value - 1
 //   and assign to an array to search variable.
 // Find the next middle value.
//    update the index your using to keep track of the original indexes by either
//    adding the new middle value + 1 to the old middle value (if the search item was greater than the previous middle value),
//  or subtracting the new middle value from the old middle value.
// Compare the search item to the new middle element and follow previous process,
// Repeat until a search item is equal to a middle element or a slice returns an empty array.
// Return -1 if no element is equal to the search item.
//


function binarySearch(list, searchItem) {
  var listToSearch = list;
  var currentSearchIndex;
  var middleIndex;

  middleIndex = listToSearch.length % 2 === 0 ? (listToSearch.length/2) - 1 : Math.floor(listToSearch.length/2);
  currentSearchIndex = middleIndex;

  while (listToSearch.length > 0) {
    if (searchItem === listToSearch[middleIndex]) {
      return currentSearchIndex;
    }
    if (searchItem < listToSearch[middleIndex]) {
      listToSearch = listToSearch.slice(0, middleIndex)
      console.log(listToSearch)
      middleIndex = listToSearch.length % 2 === 0 ? (listToSearch.length/2) - 1 : Math.floor(listToSearch.length/2);
      var diff = currentSearchIndex - middleIndex;
      currentSearchIndex = currentSearchIndex - diff;
    }
    if (searchItem > listToSearch[middleIndex]) {
      listToSearch = listToSearch.slice(middleIndex + 1)
      console.log(listToSearch)
      middleIndex = listToSearch.length % 2 === 0 ? (listToSearch.length/2) - 1 : Math.floor(listToSearch.length/2);
      currentSearchIndex = currentSearchIndex + middleIndex + 1;
    }
  }
  return -1;
}



 // Examples
var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
