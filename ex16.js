/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const vowels = ["a", "e", "i", "o", "u"];

const getCamel = (input) =>
  input
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");

const getPascal = (input) =>
  input
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

const getSnake = (input) =>
  input
    .split(" ")
    .map((word) => word)
    .join("_");

const getKebab = (input) =>
  input
    .split(" ")
    .map((word) => word)
    .join("-");

const getTitle = (input) =>
  input
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

const getVowels = (input) =>
  input
    .split("")
    .map((ch) => (vowels.includes(ch.toLowerCase()) ? ch.toUpperCase() : ch))
    .join("");

const getConsonants = (input) =>
  input
    .split("")
    .map((ch) => (!vowels.includes(ch.toLowerCase()) ? ch.toUpperCase() : ch))
    .join("");

const getUpperSnake = (input) => input.split(" ").map((word) => word.toUpperCase()).join("_")

const makeCaze = function (input, caze) {
  switch (caze) {
    case "camel":
      return getCamel(input);
    case "pascal":
      return getPascal(input);
    case "snake":
      return getSnake(input);
    case "kebab":
      return getKebab(input);
    case "title":
      return getTitle(input);
    case "vowel":
      return getVowels(input);
    case "consonant":
      return getConsonants(input);
    default:
      return getUpperSnake(input);
  }
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
