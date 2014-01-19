// Given two binary strings, return their sum (also a binary string).
// a = '11'
// b= '11'
// sum = '110'


function binary_sum(a,b){
	if(!a || !b) return null;

	a = a.split('');
	b = b.split('');

	var sum = [];
	var carry = [];

	var a_index = a.length,
			b_index = b.length,
			carry_index = a_index > b_index ? a_index : b_index,
			len = carry_index;

	while(len >= 0) { // we want sum and carry array to have 1 more space for carry
		carry.push(0);
		sum.push(0);
		len--;
	}

	while(carry_index >= 0){
		a_index--;
		b_index--
		var a_val = a[a_index] ? a[a_index] : 0,
				b_val = b[b_index] ? b[b_index] : 0,
				carry_val = carry[carry_index],
				sum_val = parseInt(a_val) + parseInt(b_val) + carry_val;

		if(sum_val > 1){
			carry[carry_index - 1] = 1;
			sum_val -= 2;
		}
		
		sum[carry_index] = sum_val;

		carry_index--;
	}

	return sum.join('');
}

binary_sum('1110','101');