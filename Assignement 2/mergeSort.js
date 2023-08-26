const merge = function mergeTwoArraysIntoOne(
  array,
  firstIndex,
  middleIndex,
  lastIndex
) {
  // Extract subArray : firstIndex included, middleIndex included
  const leftSubArray = array.slice(firstIndex, middleIndex + 1);
  // Extract subArray : middleIndex excluded, lastIndex excluded
  const rightSubArray = array.slice(middleIndex + 1, lastIndex + 1);

  // Pointers initialization
  // leftSubArray's first index
  let i = 0;
  // rightSubArray's first index
  let j = 0;
  // merged array's first index
  let k = firstIndex;

  // Add each elements of leftSubArray and rightSubArray to the merged array ascending order
  while (i < leftSubArray.length && j < rightSubArray.length) {
    if (leftSubArray[i] <= rightSubArray[j]) {
      array[k] = leftSubArray[i];
      i += 1;
    } else {
      array[k] = rightSubArray[j];
      j += 1;
    }
    k += 1;
  }

  // If elements of leftSubArray or rightSubArray are all added inside the merged array, add all remaining elements of the other side array

  for (; i < leftSubArray.length; i += 1, k += 1) {
    array[k] = leftSubArray[i];
  }

  for (; j < rightSubArray.length; j += 1, k += 1) {
    array[k] = rightSubArray[j];
  }
};

const getMiddle = function getMiddleIndexOfAnArray(firstIndex, lastIndex) {
  return Math.floor((firstIndex + lastIndex) / 2);
};

const sort = function mergeSortAnArray(array, firstIndex, lastIndex) {
  if (firstIndex < lastIndex) {
    const middleIndex = getMiddle(firstIndex, lastIndex);
    mergeSortAnArray(array, firstIndex, middleIndex);
    mergeSortAnArray(array, middleIndex + 1, lastIndex);
    merge(array, firstIndex, middleIndex, lastIndex);
  }
};

let arrayExample = [5, 1, 3, 9, 8, 4, 6, 7, 2];
console.log("Unsorted Array : " + arrayExample);
sort(arrayExample, 0, arrayExample.length - 1);
console.log("Sorted Array : " + arrayExample);
