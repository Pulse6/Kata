let camelCase = function (input) {
  for (let index of input) {
    if (input === ' ') {
      index.uppersace()
    }
  }
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious