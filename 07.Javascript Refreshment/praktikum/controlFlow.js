function findLargest(arr) {
  let largest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const numbers = [1, 2, 3, 4, 30, 5, 50, 7, 8, 9, 10];
const findLargestNumber = findLargest(numbers); 
console.log("Largest number:", findLargestNumber);

