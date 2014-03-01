// Given a binary tree, return the level order traversal of its nodes'
// ￼values. (ie, from left to right, level by level).



		// 			10
		// 		5			15
		// 	3					18
		// 1   2			16


function level_traversal(node){
	var result = [];
	level_traversal_helper(0, result, node);
	return result;
}

function level_traversal_helper(level, arr, node){
	if(!node) return;

	if(!arr[level]){
		arr[level] = [];
	}

	arr[level].push(node.value);
	
	level_traversal_helper(level +  1, arr, node.left);
	level_traversal_helper(level +  1, arr, node.right);
}




// [
// 	[10],
// 	[5,15]
// 	[3,18]
// 	[1,2,16]	
// ]