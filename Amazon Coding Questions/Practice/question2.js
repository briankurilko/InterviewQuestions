/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; ++i) {
        let string = "";
        if (i % 3 === 0) {
            string += "Fizz";
        }
        if (i % 5 === 0) {
            string += "Buzz";
        }
        if (string === "") {
            console.log(i);
        } else {
            console.log(string);
        }
    }
}