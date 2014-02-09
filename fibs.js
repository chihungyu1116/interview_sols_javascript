// memoization

function fib(value){
	if(value <= 1) return 1;

	return fib(value -1) + fib(value -2);
}

function memo_fib(value){
	var cache = {};

	return memo_fib_helper(value, cache);
}

function memo_fib_helper(value, cache){
	if(value <= 1) return 1;

	if(cache[value]) return cache[value];

	cache[value] = memo_fib(value - 1) + memo_fib(value -2);

	return cache[value];
}

function dp_fib(value){
	var cache = {
		0: 1,
		1: 1
	};

	return dp_fib_helper(value, cache);
}

function dp_fib_helper(value, cache){
	if(value <= 1) return 1;

	for(var i = 2; i <= value; i++){
		cache[i] = cache[i-1] + cache[i-2];
	}

	return cache[value];
}