// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
// The number of ways decoding "12" is 2.



function decode(str){
	return decode_helper(str, 0);
}

function decode_helper(str, index){
	if(index == str.length) return 1;
	if(index > str.length) return 0;
	
	if((str[index] == '2' && str[index+1] <= '6') || (str[index] == '1' && str[index+1] <= '9')) {
		return decode_helper(str, index + 1) + decode_helper(str, index + 2);
	}

	return decode_helper(str, index + 1);
}

decode('12')