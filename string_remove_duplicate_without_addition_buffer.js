// remove duplicate in the string without addition buffer

function removeDuplicate(str){
	var arr,i,j;

	if(!str) return str;

	arr = str.split('');

	for(i = 0; i < arr.length; i++){
		for(j = i+1; j < arr.length; j++){
			while(arr[i] === arr[j]){
				arr.splice(j,1);
			}
		}
	}
	return arr.join('');
}