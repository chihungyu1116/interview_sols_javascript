function printParenHelper(left,right,str){
	if(left === 0 && right === 0) return console.log(str);
	if(left >= right) {
		printParenHelper(left-1,right,str+'(');
	}
	if(right > left){
		if(left !== 0) printParenHelper(left-1,right,str+'(');
		if(right !== 0) printParenHelper(left,right-1,str+')');
	}
}

function printParen(count){
	printParenHelper(count,count,'');
}