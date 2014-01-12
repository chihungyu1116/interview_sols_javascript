function reverse_words_in_string(str){
	if(!str) return str;
	str = str.replace(/\s{2,}/g,' ');
	var words = str.split(' ');
	var head = 0;
	var tail = words.length-1;
	while(head < tail){
		var temp = words[tail];
		words[tail] = words[head];
		words[head] = temp;

		head++;
		tail--;
	}
	return words.join(' ');
}
