module.exports = function () {
  // write your code here
  const result = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz")
      result.push("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz")
      result.push("Buzz");
    } else {
      console.log(i)
      result.push(i);
    }
  }
  return result;
}
