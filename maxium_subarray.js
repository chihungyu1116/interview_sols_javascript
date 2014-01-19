// max subarray problem
// Maximum value Continuous Subsequence: 
// Given array A[n] find continuous subsequence a[i]..a[j] for which sum of elements in the subsequence is maximum. 

// Ex: [-2, 11, -4, 13, -5, -2] --> 11 - 4 +13 = 20 
// [1, -3, 4, -2, -1, 6] --> 4 -2 -1 +6 = 7 

// Time complexity should O(nlogn)
// Kadane's algorithm

function max_subarray(arr){
	var max, max_here;

	max = 0;
	max_here = 0;

	for(var i = 0; i < arr.length; i++){
		// the reason to compare max_here with 0 is if max_here is below 0 there is no need to keep
		// track of max_here
		max_here = Math.max(0, max_here + arr[i]);
		max = Math.max(max_here, max);
	}

	return max;
}


max_subarray([-2, 11, -4, 13, -5, -2]);
max_subarray([1, -3, 4, -2, -1, 6]);