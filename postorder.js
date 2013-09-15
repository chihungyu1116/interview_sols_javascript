function postorder(root){
	if(!root) return;
	postorder(root.left);
	postorder(root.right);
	console.log(root.val);
}