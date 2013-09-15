function preorder(root){
	if(!root) return;
	console.log(root.val);
	preorder(root.left);
	preorder(root.right);
}


function preorder_no_recursion(root){
	var stack = [], node, left, right;


	stack.push(root);

	while(stack.length){
		node = stack.pop();
		if(node){
			console.log(node);
			left = node.left;
			right = node.right;
			stack.push(right);
			stack.push(left);
		}
	}
}