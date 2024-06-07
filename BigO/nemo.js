// O(n)

const nemo = ["nemo"];

const everyone = [
  "ronaldo",
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("FOUND NEMO!" + " na posição " + i);
      break;
    }
  }
}

findNemo(everyone);
