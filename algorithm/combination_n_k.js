// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// k = 3
// n = 5

function combination_k_n(k, n){
	var arr = [];
	for(var i = 1; i <= n; i++){
		arr.push(i);
	}

	combination_helper(k, '', arr);
	console.log('end');
}

function combination_helper(k, curr, arr){
	if(k === 0) return console.log(curr);

	for(var i = 0; i < arr.length; i++){
		var item = arr[i];
		if(!curr.match(item)
			&& !(curr[curr.length-1] > item)
		){
			combination_helper(k-1, curr + item, arr);	
		} 
	}
}


combination_k_n(3,5);