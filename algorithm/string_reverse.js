
// sol 1
function reverse1(str){
	var arr,head,tail,temp;

	if(!str) return;

	head = 0;
	tail = str.length-1;

	while(head < tail){
		temp = arr[head];
		arr[head] = arr[tail];
		arr[tail] = temp;

		head++;
		tail--;
	}

	return arr.join('');
}

// sol2
function reverse2(str){
	var arr;

	arr = str.split('');
	arr.reverse();

	return arr.join('');
}