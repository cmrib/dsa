const array = [32, 4, 23, -23, -9];

function printAllNumbersThenAllPairSums(numbers) {
  console.log("Numbers: ");

  // n
  numbers.forEach(function (number) {
    console.log(number);
  });

  // nˆ2
  console.log("Now their pair sums: ");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

// O(n + nˆ2)
// O(nˆ2) // Drop non dominants

printAllNumbersThenAllPairSums(array);
