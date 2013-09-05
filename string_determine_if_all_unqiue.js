function determineUnqiue(str){
	var hash,i,char;

	if(!str) return true;

	hash = {};

	for(i=0;i<str.length;i++){
		char = str[i];
		if(hash[char]){
			return false;
		}
		hash[char] = true;
	}

	return true;

}