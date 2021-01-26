// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunked = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < size) {
//       chunked.push(array[i]);
//     }
//   }
// }

// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     //get the last element of the array
//     const last = chunked[chunked.length - 1];
//     //check if last element does not exsist, or if its length is equal to chunk size
//     if (!last || last.length === size) {
//       //push a new chunk into 'chunked' with the current element. creats a new array with the correct size.
//       chunked.push([element]);
//       //else add the current element into the chunk
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
