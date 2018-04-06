var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
let newArr = [];
let last;
 for (let i = 0; i < iterable.length; i ++) {
  if(iterable[i] !== last) {
    last = iterable[i];
    newArr.push(last);
  }
 }
 return newArr;
}



uniqueInOrder('AAAABBBCCDAABBB');

// uniqueInOrder('ABBCcAD');

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]