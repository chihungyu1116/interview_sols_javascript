// Given a binary tree, find the maximum path sum.
// The path may start and end at any node in the tree.



function max_path(node){
	return max_path_helper(node, 0, -Infinity);
}

function max_path_helper(node, current, max){
	if(!node) return max;

	current += node.value;

	if(current > max){
		max = current;
	}

	if(current < 0){
		current = 0;
	}

	return Math.max(max_path_helper(node.left, current, max), max_path_helper(node.right, current, max));
}


