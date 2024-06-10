// given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

const arr1 = ["a", "b", "c", "x", "a"];
const arr2 = ["p", "q", "x", "e"];
const arr3 = ["f"];

function nestedCommonItem(array1, array2) {
  // O(a * b)

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) return true;
    }
  }
  return false;
}

function mapCommonItem(array1, array2) {
  // O(a * b)
  const firstArrayMap = new Set(array1);
  console.log(firstArrayMap);

  for (let i = 0; i < array2.length; i++) {
    if (firstArrayMap.has(array2[i])) return true;
  }
  return false;
}

console.log(mapCommonItem(arr1, arr2));
