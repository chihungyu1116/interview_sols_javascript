function inorder(root){
	if(!root) return;

	inorder(root.left);
	console.log(root.val);
	inorder(root.right);
}