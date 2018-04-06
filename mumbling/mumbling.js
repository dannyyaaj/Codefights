function funkyCapitalize(letter, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    i === 0
      ? result += letter.toUpperCase()
      : result += (letter.toLowerCase());
  }
  return result;
}

function accum(s) {
  let result = [];
  let letters = s.split("");
  let count = 1

  for (let letter of letters) {
    result.push(funkyCapitalize(letter, count));
    count++;
  }

return result.join("-");
}

console.log(accum("bcda"));