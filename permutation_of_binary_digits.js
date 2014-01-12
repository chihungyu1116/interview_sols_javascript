// print out all the permutation in binary
// given n = 3
// 000
// 001
// 010
// 100
// 011
// 110
// 101
// 111

function binary(n){
  var result = [];
 
  binary_helper(result, n, '');

  return result;
}

function binary_helper(result, n, current){
  if(current.length === n){return result.push(current);}

  binary_helper(result, n, current + '0');
  binary_helper(result, n, current + '1');
}