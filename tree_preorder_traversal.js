function preorder(root){
	if(!root) return;
	console.log(root.val);
	preorder(root.left);
	preorder(root.right);
}


// function preorder_no_recursion(root){
// 	var stack = [], node, left, right;

// 	stack.push(root);

// 	while(stack.length){
// 		node = stack.pop();
// 		if(node){
// 			console.log(node);
// 			left = node.left;
// 			right = node.right;
// 			stack.push(right);
// 			stack.push(left);
// 		}
// 	}
// }



    1
  2   3
4   5







function preorder_no_recursion(node) {
  if(!node) return;

  var stack = [];
  stack.push(node);
  while(stack.length > 0){
  	var n = stack.pop();
  	console.log(n.val);
  	if(n.right) stack.push(n.right);
  	if(n.left) stack.push(n.left);
  }
}