function adjacentElementsProduct(arr) {
  let result = (arr[0] * arr[1]);

  for (let i = 0; i < arr.length; i++) {
    result = arr[i] * arr[i + 1] >= result ? arr[i] * arr[i + 1] : result;
  }
  return result;
}