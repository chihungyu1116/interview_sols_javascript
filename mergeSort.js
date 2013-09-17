function mergeSort(arr){
	if(!arr) return;
	mergeSortHelper(arr);
}


function mergeSortHelper(arr){
	var middle,first,second;
	if(arr.length < 2) return arr;
	middle = Math.floor(arr.length/2);
	first = mergeSortHelper(arr.slice(0,middle));
	second = mergeSortHelper(arr.slice(middle));

	return merge(first,second);
}

function merge(first,second){
	var arr=[],first_pointer=0, second_pointer=0;

	while(first_pointer < first.length && second_pointer < second.length){
		if(first[first_pointer] < second[second_pointer]){
			arr.push(first[first_pointer]);
			first_pointer++;
		} else {
			arr.push(second[second_pointer]);
			second_pointer++;
		}
	}
	arr = arr.concat(first.slice(first_pointer)).concat(second.slice(second_pointer));
	return arr;
}

var someArr = [23,5,7,89,32,1,24,6];
someArr = mergeSort(someArr);
someArr;

// [1,2,3,4,5,6,7,8,9] left 0 right 8 middle 4
// [1,2,3,4,5] left 0 right 4 middle 2
// [1,2,3] left 0 right 2 middle 1
// [1,2] left 0 right 1 middle 0
// [1] [2] left 0 right 0


// [1,2,3,4,5,6,7,8,9] left 0 right 8 middle 4
// [6,7,8,9] left 5 right 8 middle 6
// [8,9] left 7 right 8 middle 7
// [8] [9] left 8 right 8