// given a function combination_sum(n, sum)
// return all combination of n number of positive integer that adds up to the sum

function combination_sum(n, sum){
  var result = [];
  helper(n, sum, [], result);

  return result;
}

function helper(n, remaining, current, result){
  var available_arr = range(0, remaining);

  if(n === 0) {
    result.push(current);
    return;
  } else if(n === 1 && remaining !== 0) {
    current.push(remaining); // also is the last one in the available_arr
    helper(n - 1, 0, current, result);
  } else if(remaining === 0) {
    current.push(0); // also is the first one in the available_arr
    helper(n - 1, remaining, current, result);
  } else {
    for(var i = 0; i < available_arr.length; i++){
      var cloned = current.slice();
      var value = available_arr[i];
      cloned.push(value);
      helper(n - 1, remaining - value, cloned, result);
    }
  }
}

function range(min, max){
  var arr = [];

  for(min; min < (max + 1); min++){
    arr.push(min);
  }

  return arr;
}

var sum = 3;
var arr = [0,1,2,3];

// if the remaining is 0 push 0
// if the remaining is not 0 and it's not the last pick loop through the available array
// if the remaining is not 0 and it's the last pick, pick the biggest one in the available array