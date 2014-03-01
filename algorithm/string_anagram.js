function isAnagram1(str1,str2){
	if(str1.length !== str2.length) return false;

	str1 = str1.sort();
	str2 = str2.sort();

	if(str1 === str2){
		return true;
	}

	return false;
}

function isAnagram2(str1,str2){
	var hash1,hash2,i,j,o.c1,c2;

	if(str1.length !== str2.length) return false;

	for(i=str1.length;i--;){
		c1 = str1[i];
		c2 = str2[i];

		if(hash1[c1])
			hash1[c1]++;
		else
			hash1[c1]=0;

		if(hash2[c2])
			hash[c2]++;
		else
			hash2[c2]=0;
	}

	for(o in hash1){
		if(hash.hasOwnProperty(o)){
			if(hash1[o] !== hash2[o]){
				return false;
			}
		}
	}
	return true;
}