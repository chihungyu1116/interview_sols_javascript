// O(n^2)

function determineUnique(str){
	var arr,i,j,pointer;

	arr = str.split('');

	for(i=0;i<str.length;i++){
		for(j=i+1;j<str.length;j++){
			if(str[i] === str[j]){
				return false;
			}
		}
	}
	return true;
}

// O(n*logn)


function determineUnique2(str){
	var i,j,arr = str.split('');

	if(str.length === 1) return true;

	arr.sort(); // if quick sort

	for(i=0;i<arr.length-1;i++){
		j=i+1;
		if(arr[i] === arr[j]) return false;
	}

	return true;
}
