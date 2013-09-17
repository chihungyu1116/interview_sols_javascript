// Given a stack and an input string of 1234.At any point you can do anyone of the follow 
// i. take the next input symbol and Enque.
// ii. you can pop as many as you can. When ever you
// pop an element it will be printed
//             (you cannot pop from an empty stack)
// How many such permutations are possible on an input of size N?


// 2 choices, you can either pop or not to pop, but pop only if you have item in the stack



// 1234
// 



function queueOrPop(stack_current,stack_remain,str){
	if(stack_remain.length === 0 && stack_current.length === 0){
		return console.log(str);
	}

	if(stack_current.length){
		var temp_current = stack_current.slice();
		var temp_str = str + temp_current.pop();
		queueOrPop(temp_current,stack_remain,temp_str);
	}
	if(stack_remain.length){
		var temp_remain = stack_remain.slice();
		var temp_current = stack_current.slice();
		temp_current.push(temp_remain.pop());
		queueOrPop(temp_current,temp_remain,str);
	}
}


queueOrPop([],[4,3,2,1],'');