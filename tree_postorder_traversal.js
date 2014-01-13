function postorder(root){
	if(!root) return;
	postorder(root.left);
	postorder(root.right);
	console.log(root.val);
}



// require modified node
// node = {
//   val:'',
//	 left:'',
//   right:'',
//   visited:''
// }

function postorder_no_recursion(node){
	var stack = [];
	stack.push(node);

	while(stack.length){
		var n = stack.pop();
		if(!n){
			continue;
		} else if(n.visited) {
			console.log(n.val);	
		} else if(n.left || n.right) {
			n.visited = true;
			stack.push(n);
			stack.push(n.right);
			stack.push(n.left);
		}
	}
}