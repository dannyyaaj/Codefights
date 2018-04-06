function sortByHeight(a) {
  let newArray = a.filter((element) => {
    if (element != -1) {
      return element;
    }
  }).sort((a, b) => {
    return a - b;
  });

  let indexVal = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = newArray[indexVal];
      indexVal++;
    }
  }
  return a;
}
