// first modified node so it can store visit
// have both node going up 1 step at a time
// if one of them step on a node that is marked as visited then it's a common ancestor of both node

function findCommonAncestor(node1,node2){
	var node1_next, node_2_next
	node1_next = node1 ? node1.parent : null;
	node2_next = node2 ? node2.parent : null;
	if(node1 && node2){
		if(node1.visited){
			return node1;
		} else {
			node1.visited = true;
		}
		if(node2.visited){
			return node2;
		} else {
			node2.visited = true;
		}
	}

	return findCommonAncestor(node1.parent,node2.parent)
}