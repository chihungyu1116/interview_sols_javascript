// [1,3,4,2] 10
// [1,3] 9      [4,2] 8
// [1] 7 [3] 6  [4] 5 [2] 4

// 10->9->7 7 returned
// 10->9->6 6 returned

// 7 and 6 got merged

// 10->9->8
// 10->9->8->5 5 returned
// 10->9->8->4 4 returned

// 5 and 6 got merged

// 9 n 8 got merged
// got 10 as answer sorted




// [1,2,3,4,5,6,7,8,9] left 0 right 8 middle 4
// [1,2,3,4,5] left 0 right 4 middle 2
// [1,2,3] left 0 right 2 middle 1
// [1,2] left 0 right 1 middle 0
// [1] [2] left 0 right 0


// [1,2,3,4,5,6,7,8,9] left 0 right 8 middle 4
// [6,7,8,9] left 5 right 8 middle 6
// [8,9] left 7 right 8 middle 7
// [8] [9] left 8 right 8


// [1,4,7,3,2,6,8,9,2,3]
// [1,4,7,3,2]    [6,8,9,2,3]
// [1,4,7]    [3,2]     [6,8,9]     [2,3]
// [1,4]  [7] [3] [2]   [6,8] [9]   [2] [3]
// [1][4]



function merge_sort(arr){
	console.log(merge_sort_helper(arr));
}

function merge_sort_helper(arr){
	var middle = parseInt(arr.length/2);

	if(arr.length < 2) return arr;

	var left = merge_sort_helper(arr.slice(0,middle));
	var right = merge_sort_helper(arr.slice(middle));

	return merge(left,right);
}

function merge(a, b){
	var arr = [];
	var a_index = 0, b_index = 0;
	while(a_index < a.length && b_index < b.length){
		if(a[a_index] <= b[b_index]){
			arr.push(a[a_index]);
			a_index++;
		} else {
			arr.push(b[b_index]);
			b_index++;
		}
	}
	
	arr = arr.concat(a.slice(a_index)).concat(b.slice(b_index));
	
	return arr;
}

	