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

// 11122311335551

// pick 1
// and traverse through the array n remove all 1
// got 122333555
// pick 2
// got 12333555
// pick 3
// got 123555
// pick 5
// got 1235