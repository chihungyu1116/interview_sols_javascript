// following coins: half dollar, quarters,dime, nickel and penny. 
// Print all the possible combinations of coins that will equal to one dollar.
// (Ex : (2) half-dollar , (4) quarter dollar etc )..

// 0.5, 0.25, 0.1, 0.05, 0.01

function combination_coins(value){
	return combination_coins_helper(value, []);
}

function combination_coins_helper(remaining, current){
	var coins = [0.5, 0.25, 0.1];

	if(remaining === 0) return console.log(current);

	for(var i = 0; i < coins.length; i++){
		var coin_value = coins[i];
		if(coin_value <= remaining){
			var cloned_current = current.slice();
			cloned_current.push(coin_value);
			var new_remaining = parseFloat((remaining - coin_value).toPrecision(3));
			combination_coins_helper(new_remaining, cloned_current);
		}
	}
}

combination_coins(1);