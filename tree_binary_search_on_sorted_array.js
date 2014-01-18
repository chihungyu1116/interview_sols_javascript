function binarySearch(arr,val){
	if(!arr) return -1;
	return binarySearchHelper(0,arr.length-1,arr,val);
}

function binarySearchHelper(left,right,arr,val){
	var middle = Math.round((left + right)/2);

	if(left > right) return -1;
	if(arr[middle] === val){
		return middle;
	} else if(arr[middle] < val){
		return binarySearchHelper(middle+1,right,arr,val);
	} else if(arr[middle] > val){
		return binarySearchHelper(left,middle-1,arr,val)
	}
}

// binarySearch([1,2,3,4,5,6,7,8,9],6) returns 5