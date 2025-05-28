const { number } = require("yargs");
const { vowels, add } = require("./vowels.js");

test("should conunt the vowels of a given string", () => {
  expect(vowelsowels("hello")).toBe(2);
  expect(vowelsowels("LauncCode")).toBe(4);
  expect(vowelsowels("Bahar")).toBe(2);
});
test("this shoud add the numbers", () => {
  expect(add(1, 2)).toBe(3);
});
test("this should test if the given is a number", () => {
  expect(typeof add(1, 2)).toBe("number");
});
