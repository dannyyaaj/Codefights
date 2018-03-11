function allLongestStrings(inputArray) {
  let largestLength = inputArray[0].length;

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length >= largestLength) {
      largestLength = inputArray[i].length;
    }

  }

  inputArray = inputArray.filter((element) => {
    return element.length === largestLength;
  })

  return inputArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))
