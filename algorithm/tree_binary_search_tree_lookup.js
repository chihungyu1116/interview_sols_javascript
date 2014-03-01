function BSTLookUp(node,value){
	if(!node) return false;
	if(node.value === value){return true;}
	if(node.value > value){return BSTLookUp(node.left,value);}
	if(node.value < value){return BSTLookUp(node.right,value);}
}