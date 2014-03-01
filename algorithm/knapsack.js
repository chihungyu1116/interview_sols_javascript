// Given a list of quantity of books and corresponding prices.User wants to purchase Q quantity of books. Provide an algorithm which suggest user Q Quantity of books with minimum price 
// e.g 
// Quantity of Books 10 20 30 15 25 
// price of books 100 200 120 130 165 
// user wants to purchase 500 quantity of books.come up with minimum price


function knapack(require_amount){

	var a = {
		quantity: 10,
		price: 100
	}

	var b = {
		quantity: 20,
		price: 200
	}

	var c = {
		quantity: 30,
		price: 120
	}

	var d = {
		quantity:15,
		price: 130
	}

	var e = {
		quantity: 25,
		price: 165
	}

	var arr = [a,b,c,d,e];

	return min_price(arr, require_amount, 0);
}

function min_price(arr, require_amount, price){
	if(require_amount === 0) return price;
	if(require_amount < 0) return Infinity;

	var result_arr = [];
	for(var i = 0; i < arr.length; i++){
		result_arr.push(min_price(arr, require_amount - arr[i].quantity, price + arr[i].price));
	}

	return Math.min.apply(null, result_arr);
}


knapack(100);

// 500 takes long time to calculate in the console, might overflow