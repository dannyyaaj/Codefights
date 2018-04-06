function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function toJadenCase(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    result.push(capitalize(word));
  }

return result.join(" ");

}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));