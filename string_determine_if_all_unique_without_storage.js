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
}