function countVowels(str) {
  const vowels = new Set(["a", "o", "i", "u", "e"]);
  return [...str.toLowerCase()].filter((char) => vowels.has(char)).length;
}

function add(num1, num2) {
  if (num1 === "string" && num2 === "string") return false;
  return num1 + num2;
}
add(1, 3);
module.exports = {
  countVowels,
  add,
};
