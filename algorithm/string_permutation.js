// print out all the permutation without duplication
function removeDuplicate(arr){
	var result,hash,val,i;
	hash = {};
	result = [];
	for(i=0;i<arr.length;i++){
		val = arr[i];
		if(!hash[val]){
			hash[val] = true;
			result.push(val);
		}
	}
	return result;
}
function permuHelper(remain,str){
	var i,first_half,second_half,arr,len;
	remain = removeDuplicate(remain);
	len = remain.length;

	if(len === 0){
		return console.log(str);
	}
	for(i = 0; i < len; i++){
		first_half = remain.slice(0,i);
		second_half = remain.slice(i+1,len);
		arr = first_half.concat(second_half);
		permu_helper(arr, str + remain[i]);
	}
}
function permu(str){
	var arr;
	arr = str.split('');
	permuHelper(arr,'');
}
// example:
permu('abcde');



// a   bcde
// b   acde
// c   