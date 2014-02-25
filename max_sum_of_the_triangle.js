// 75 
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65
// 19 01 23 75 03 34
// 88 02 77 73 07 63 67
// 99 65 04 28 06 16 70 92
// 41 41 26 56 83 40 80 70 33
// 41 48 72 33 47 32 37 16 94 29
// 53 71 44 65 25 43 91 52 97 51 14
// 70 11 33 28 77 73 17 78 39 68 17 57
// 91 71 52 38 17 14 91 43 58 50 27 29 48
// 63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23




function create_triangle_array(arr){
	var result = [],
			len = arr[arr.length - 1].split(' ').length;

	for(var i = 0; i < arr.length; i++){
		var str = arr[i],
				row = str.split(' ');

		result.push([]);
		for(var j = 0; j < len; j++){
			var value = row[j] ? row[j] : 0;
			result[i].push(value);
		}
	}

	return result;
}


function max_sum(){

	var triangle = [
				'75',
				'95 64',
				'17 47 82',
				'18 35 87 10',
				'20 04 82 47 65',
				'19 01 23 75 03 34',
				'88 02 77 73 07 63 67',
				'99 65 04 28 06 16 70 92',
				'41 41 26 56 83 40 80 70 33',
				'41 48 72 33 47 32 37 16 94 29',
				'53 71 44 65 25 43 91 52 97 51 14',
				'70 11 33 28 77 73 17 78 39 68 17 57',
				'91 71 52 38 17 14 91 43 58 50 27 29 48',
				'63 66 04 68 89 53 67 30 73 16 69 87 40 31',
				'04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'
			];

	var data = create_triangle_array(triangle);

	return max_sum_helper(data);

}


function max_sum_helper(triangle){
	var rows = triangle.length,
			cols,
			max_sum;

	for(var row = rows-1; row--;){
		cols = triangle[row].length;
		for(var col = 0; col < cols; col++){
			triangle[row][col] = parseInt(triangle[row][col]) + Math.max(parseInt(triangle[row + 1][col]), parseInt(triangle[row +1][col + 1]));
		}
	}
	return triangle
}

max_sum();



// recursion

function return_max(node){
	if(!node) return 0;
	return node.value + Math.max(return_max(node.left), return_max(node.right)); 
}