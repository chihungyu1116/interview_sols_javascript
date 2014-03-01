// write a program which takes a Binary Tree and returns true if it is also a Binary Search Tree 

// binary search tree is valid if it's inorder traversal returns a sorted array in ascending order
// however we can do it without creating an array by simply checking it in the tree

// bst left node and left node's children must be smaller than the current node 
// bst right node and right node's children must be larger than the current node 




function is_valid_bst(root){
	return is_valid_bst(root, -Infinity, Infinity);
}

function is_valid_bst(node, min, max){
	if(node == null) return true;

	if(node.value >= min
	&& node.value <= max
	&& is_valid_bst(node.left, min, node.value)
	&& is_valid_bst(node.right, node.value, max);
	) {
		return true;
	} else {
		return false;
	}
}



//      10
//   6      13
// 3      11   14
//          12


// take right at 10 
// 10 will be the min for all the nodes on its right

// take left at 10
// 10 will be the max for all the nodes on its left


// take left at 13
// 13 will be the max to 11 and 10 will still be the min