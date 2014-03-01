// get binary tree with sorted array
// given array [1,2,3,4,5,6,7,8,9,10]


function getBinaryTree(arr,root){
	var len = arr.length,
		middle = parseInt(len/2),
		left,right;

	if(!arr.length) return;

	root = new Node(middle);
	left = arr.slice(0,middle);
	right = arr.slice(middle);

	getBinaryTree(left,root.left);
	getBinaryTree(right,root.right);
}