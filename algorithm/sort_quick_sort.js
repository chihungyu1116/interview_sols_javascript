function quick_sort(arr){
	
	return quick_sort_helper(arr, 0, arr.length-1);
}

function quick_sort_helper(arr, left, right){
	if(left >= right) return;

	var pivot = partition(arr, left, right);

	quick_sort_helper(arr, left, pivot-1);
	quick_sort_helper(arr, pivot + 1, right);
}

function partition(arr, left, right){
	var pivot = left,
			pivot_value = arr[pivot];

	while(left < right){
		while(arr[left] <= pivot_value){
			left++;
		}
		while(arr[right] > pivot_value){
			right--;
		}
		if(left < right){
			swap(arr, left, right);
		}
	}

	arr[pivot] = arr[right];
	arr[right] = pivot_value;

	return right;
}


function swap(arr, left, right){
	var temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
}

x= [1,2,3,8,3,4,6,8,1,1,1,2];
quick_sort(x);








