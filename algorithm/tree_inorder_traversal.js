function inorder(root){
	if(!root) return;

	inorder(root.left);
	console.log(root.val);
	inorder(root.right);
}


// require modified node
// node = {
//   val:'',
//	 left:'',
//   right:'',
//   visited:''
// }

function inorder_no_recursion(node){
	var stack = [];
	stack.push(node);

	while(stack.length){
		var n = stack.pop();
		if(!n){
			continue;
		} else if(n.visited || (!n.left && !n.right)) {
			console.log(n.val);	
		} else if(n.left || n.right) {
			n.visited = true;
			stack.push(n.right);
			stack.push(n);
			stack.push(n.left);
		}
	}
}