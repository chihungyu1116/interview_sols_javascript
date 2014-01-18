// Given a stack and an input string of 1234.At any point you can do anyone of the following
// i. take the next input symbol and Enque.
// ii. you can pop as many as you can. Whenever you
// pop an element it will be printed
//             (you cannot pop from an empty stack)
// How many such permutations are possible on an input of size N?


// 2 choices, you can either pop or not to pop, but pop only if you have item in the stack



// 1234
// 



function queueOrPop(stack_for_pop,stack_for_queue,str){
	if(stack_for_queue.length === 0 && stack_for_pop.length === 0) return console.log(str);
	if(stack_for_pop.length){ // if we can pop
		var temp_current = stack_for_pop.slice();
		var temp_str = str + temp_current.pop();  
		queueOrPop(temp_current,stack_for_queue,temp_str);
	}
	if(stack_for_queue.length){
		var temp_remain = stack_for_queue.slice();
		var temp_current = stack_for_pop.slice();
		temp_current.push(temp_remain.pop());
		queueOrPop(temp_current,temp_remain,str);
	}
}


queueOrPop([],[4,3,2,1],'');
