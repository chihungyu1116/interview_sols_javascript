// check if tree2 is a subtree of tree1

function containTree(tree1,tree2){
	if(!t2) return true;
	return isSubtree(tree1,tree2);
}



function isSubtree(tree1,tree2){
	if(!tree1) return false;
	if(tree1.val === tree2.val){
		if(match(tree1,tree2)) return true;
	}
	return isSubtree(tree1.left,tree2) || isSubtree(tree1.right,tree2);
}


function match(tree1,tree2){
	if((!tree1 && !tree2)  return true;
	if(tree1 && tree2){
		if(tree1.val === tree2.val){
			return match(tree1.left,tree2.left) && match(tree1.right,tree2.right)
		}
	}
	return false;
}
