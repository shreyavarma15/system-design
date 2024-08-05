// 'abc' ==> false
// 'aba' ==> true
//'     aba  ' ==> true
// 121 ==> true
// 123 ==> false
// -121 ==> ignore negative ==> true
// a ==> true
// Boolean, object. array, undefined ==> null
// 'Aba' ==> true
// null ==> null
// no input ==> null
// length > 10 ==> null

const isPalindrome = require("./tdd");

test("The function returns true if a palindrome is passed", () => {
  const result = isPalindrome("aba");
  expect(result).toBe(true);
});

test("The function returns false if the string is not a palindrome", () => {
  const result = isPalindrome("abc");
  expect(result).toBe(false);
});

test("The function returns null if null is passed", () => {
  const result = isPalindrome(null);
  expect(result).toBe(null);
});

test("The function returns null if no argument is passed", () => {
  const result = isPalindrome();
  expect(result).toBe(null);
});

test("The function returns null if argument type is not a nuber or string", () => {
  const result = isPalindrome({});
  expect(result).toBe(null);
});

test("The function returns null if the length of string is more than 10", () => {
  const result = isPalindrome("abcdefghijklmnopqrstuywxyz");
  expect(result).toBe(null);
});

test("The function returns true if single character is passed", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});

test("The function converts number to string and checks if it's palindrome", () => {
  const result = isPalindrome(121);
  expect(result).toBe(true);
});

test("The function return false if number is not a palindrome", () => {
  const result = isPalindrome(123);
  expect(result).toBe(false);
});

test("The function ignore negative number and check if the number is a palindrome", () => {
  const result = isPalindrome(-121);
  expect(result).toBe(true);
});

test("The function ignores white spaces passed before or after the string", () => {
  const result = isPalindrome("   aba   ");
  expect(result).toBe(true);
});

test("The function ignores white spaces passed in the string", () => {
  const result = isPalindrome(" ab    a  ");
  expect(result).toBe(true);
});

test("The function ignores the letter casing in the string", () => {
  const result = isPalindrome("Aba");
  expect(result).toBe(true);
});
