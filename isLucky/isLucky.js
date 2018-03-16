function isLucky(n) {
n = n.toString();
let half = n.length/2;

let firstHalf = n.substring(0, half).split('').reduce((a,b) => {
  return parseInt(a) + parseInt(b);
});

let secondHalf = n.substring(half, n.length).split('').reduce((a,b) => {
  return parseInt(a) + parseInt(b);
});

  return firstHalf === secondHalf;
}
