// Loop through the arr
// Partition to sub arrays based on chunksize
//

// function makeParts(arr, chunkSize) {
//   const chunkArr = [];

//   for (let i = 0; i < arr.length; i = i + chunkSize) {
//     chunkArr.push(arr.slice(i, i + chunkSize));
//   }

//   return chunkArr;
// }

// function makeParts(arr, chunkSize) {
//   return (a, k) =>
//     Array.from({ length: Math.ceil(a.length / k) }, (_, i) =>
//       a.slice(k * i, k * (i + 1))
//     );
// }

// const makeParts = (a, k) => Array.from({length: Math.ceil(a.length/k)}, (_, i) => a.slice(k*i, k*(i + 1)));

// console.log(makeParts([6, 3, 5, 7, 8, 9, 7, 8, 9], 2));

function insertDashII(num) {
  let i = 0;
  const newArr = [];
  const numArr = [...num.toString()];

  let char1;
  let char2;
  let charSum;

  do {
    char1 = numArr[i];
    char2 = numArr[i + 1];
    charSum = +char1 + +char2;

    char1 < 1 || char2 < 1
      ? newArr.push(char1)
      : charSum % 2 !== 0
      ? newArr.push(char1)
      : (char1 % 2 === 0) & (char1 > 0)
      ? newArr.push(char1, "*")
      : newArr.push(char1, "-");

    i++;
  } while (i < numArr.length);
  return newArr.join("");
}
console.log(insertDashII(40546793));
console.log(insertDashII(842411));
console.log(insertDashII(55));
