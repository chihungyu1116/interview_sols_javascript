// gonna use array to replace linklist here
function findLevelLinkList(root){
	var level = [], stack1 = [], stack2 = [], node, left, right;

	stack1.push(root);
	level.push(stack1.slice());

	while(true){
		stack2 = [];
		while(stack1.length){
			node = stack1.pop();
			if(node.left) stack2.push(node.left);
			if(node.right) stack2.push(node.right);
			
		}
		stack1 = stack2;

		if(stack1.length === 0){
			return level;
		} else {
			level.push(stack1);
		}
	}
}