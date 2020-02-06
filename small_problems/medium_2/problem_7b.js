// input:  an array of two or more elements - numbers or words.
// output:  the array sorted using the bubble sort method
// rules:
// check the first 2 elements, if element1 < element2 do nothing and move on,
// if element1 > element2, swap the two elements in the array.
// Check the new element2 and element3, swap if they are not in correct order.
// Move on to element3 and element4, swap if they are not in correct order.
// stop the iteration after you have checked the last 2 elements (index length - 1 and length - 2)
// keep track whenever a swap is made.
// after a full iteration, if no swap has been made, return the mutated array.
// if not, go through the process again.
// iterate through the array until one pass is made and no swaps are made
// algorithm:
// initialize a variable to keep track of swaps (swapsMade = false)
// loop through the array , stopping when i === array.length - 1.
// compare array[i] and array[i + 1], swap the values if they are in the wrong order.
// set swapsMade to true.
// continuing comparing and swapping elements until the last 2 elements have been
// compared. If swapsmade equals false, return the mutated array.
// If not, set swapsMade to false and loop through again.

function bubbleSort(array) {

  function swapElements(a, b) {
   var temp;
   temp = a;
   a = b;
   b = temp;
  }

  var swapsMade;
  do  {
    swapsMade = false;
    var i;
    for (i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        // var temp;
        // temp = array[i];
        // array[i] = array[i + 1];
        // array[i + 1] = temp;
         swapElements(array[i], array[i + 1]);
         swapsMade = true;
      };
    };
  } while (swapsMade === true)

return array;
}


// examples:

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
