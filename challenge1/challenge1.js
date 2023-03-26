
// CHALLENGE 1

// Array change
// Create a function that takes two arrays (original array, updated array) as input and return two arrays of modifications (new elements, removed elements).

function find_modify_array(original_Array, updated_Array) {
  
  const new_el = updated_Array.filter((el) => !original_Array.includes(el));


  const removed_el = original_Array.filter((el) => !updated_Array.includes(el));


  return [new_el, removed_el];
}

let originalArray=[1,2,3,4];
let updatedArray=[2,4,5,6];
console.log(find_modify_array(originalArray,updatedArray));