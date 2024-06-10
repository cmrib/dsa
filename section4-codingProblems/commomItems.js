const arrayA = [1, 2, 3, 4];
const arrayB = [4, 5, 6, 7];
const arrayc = [10, 11, 12, 13];

function checkCommonItems(array1, array2) {
  let copiesMap = new Map();

  for (let i = 0; i < array1.length; i++) {
    const copy = array1[i];

    if (copiesMap.has(array2[i])) {
      return true;
    }
    copiesMap.set(copy, null);
  }

  return false;
}

console.log(checkCommonItems(arrayA, arrayB));
// nestedLoop(arrayA);
// console.log(linearSearch(arrayA));
