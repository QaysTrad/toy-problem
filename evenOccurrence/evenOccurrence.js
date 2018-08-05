//Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.
//Examples


//input:[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
//output:2
//input:[ "cat", "dog", "dig", "cat" ]
//output:"cat"



function evenOccurrence (arr) {
    var storage = {};
  for(var j =0; j < arr.length ; j++){
    storage[arr[j]] = storage[arr[j]] + 1 || 1;
    
  }

  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];

    if (storage[current] % 2 === 0) {
      return current;
    }
  }

  return null;
}


