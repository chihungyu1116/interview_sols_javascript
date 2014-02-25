// Given an array S of n integers, find three integers in S such that the sum is closest to a given number,
// target. Return the sum of the three integers. 
// You may assume that each input would have exactly one solution.


function three_sum_closest(arr, target){
	var len = arr.length;

	if(len < 3) return null;

	arr = arr.sort(function(a,b){return a > b;});

	var closest = arr[0] + arr[1] + arr[2];

	for(var i = 0; i < len; i++){
		var j = i + 1,
				k = len - 1;
		while(j < k){
			var sum = arr[i] + arr[j] + arr[k];

			closest = Math.abs(target - sum) > Math.abs(target - closest) ? closest : sum;

			if(sum == target) {
				return sum;
			} else if(sum > target){ // by moving k to left we ensure we get smaller value since array is sorted
				k--;
			} else { // sum < target, moving j to the right we ensure we get larger value since array is sorted
				j++;
			}
		}
	}
	return closest;
}

three_sum_closest([4,2,56,8,3,13,5,10],22);