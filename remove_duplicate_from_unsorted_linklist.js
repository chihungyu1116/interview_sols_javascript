// assume having node structure like this 
// node {
//   val
//   next	
// 

function Node(){
	this.val = '';
	this.next = null;
}

// prev = null
// nodes 1 1 2 3 2 4 5 6
// point at 1, index = 0, prev = 1
// point at 1, index = 1,
// point at 2, index = 2, prev = 2

function removeDuplicateFromLinkList(node){
	var table = {},
		head,
		val,
		prev;

	head = node;

	while(node){
		val = node.get('val');
		if(table[val]){
			prev.next = node.next;
		} else {
			table[val] = true;
			prev.next = node;
		}
	}
	return node;
}