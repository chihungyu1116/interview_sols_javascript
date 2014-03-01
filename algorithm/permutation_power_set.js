function powerset(arr){
	return powerset_helper([[]], arr, 0);
}


function powerset_helper(result, arr, i){
  if(arr.length === i) return result;

  // result.forEach(function(val, index){ // use forEach
  // 	var cloned_push = val.slice();
		// cloned_push.push(arr[i]);
  //   result.push(cloned_push);
  // });

	var len = result.length; // use loop

	for(var index = 0; index < len; index++){
		var cloned_push = result[index].slice();
		cloned_push.push(arr[i]);
		result.push(cloned_push);
	}

  return powerset_helper(result, arr, i+1);
}   

powerset([1,2,3]);

// loop through 1, 2, 3 for each thing in the array there are two decisions, one is either push it or not push it
// []

// []
// [1]

// []
// [1]
// [1,2]
// [2]

// [1]
// [1,3]
// [1,2]
// [1,2,3]
// []
// [3]
// [2]
// [2,3]