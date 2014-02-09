// You are given a 2-Dimensional array with M rows and N columns. 
// You are initially positioned at (0,0) which is the top-left cell in the array. 
// You are allowed to move either right or downwards. 
// The array is filled with 1's and 0's. 
// A 1 indicates that you can move through that cell, 
// a 0 indicates that you cannot move through the cell. 
// Given a function numberOfPaths which takes in the above 2-D array, 
// return the number of paths from the top-left cell 
// to the bottom-right cell (i.e. (0,0) to (M-1,N-1)).



// 1 1 1 0 0 1 0
// 1 0 1 1 1 1 0
// 1 0 1 0 1 0 0
// 1 1 0 0 1 0 0
// 1 0 0 0 1 1 1
// 1 1 1 1 1 1 1
var arr = [
	[1, 1, 1, 0, 0, 1, 0],
	[1, 0, 1, 1, 1, 1, 0],
	[1, 0, 1, 0, 1, 0, 0],
	[1, 1, 0, 0, 1, 0, 0],
	[1, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1]
]


function paths(arr){
	var m = arr.length -1,
			y = arr[0].length -1;

	if(arr && arr[0] && arr[0][0] === 1){
		return sols(arr, 1, 0, m, y) + sols(arr, 0, 1, m, y);	
	} else {
		return 0;
	}
}

function sols(arr, x, y, m, n){
	if(x === m && y === n) return 1;
	if(arr[x] && arr[x][y] === 1){
		return sols(arr, x + 1, y, m, n) + sols(arr, x, y + 1, m, n);
	} else {
		return 0;
	}
}


paths(arr);
