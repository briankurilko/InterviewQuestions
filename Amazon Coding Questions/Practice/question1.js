/*
 * Complete the 'arraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function arraySum(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}
