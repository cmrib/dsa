const arrayA = [2, 3, 6, 5];

function linearSearch(array, desiredSum) {
  let complementsMap = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = desiredSum - array[i];
    if (complementsMap.has(array[i])) {
      return true;
    }
    complementsMap.set(complement, null);
  }

  return false;
}

console.log(linearSearch(arrayA, 8));
// nestedLoop(arrayA);
// console.log(linearSearch(arrayA));
