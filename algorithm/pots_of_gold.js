// Pots of gold game: Two players A & B. There are pots of gold arranged in a line, each containing some gold coins (the players can see how many coins are there in each gold pot - perfect information). They get alternating turns in which the player can pick a pot from one of the ends of the line. The winner is the player which has a higher number of coins at the end. The objective is to "maximize" the number of coins collected by A, assuming B also plays optimally. A starts the game. 

// The idea is to find an optimal strategy that makes A win knowing that B is playing optimally as well. How would you do that? 

// At the end I was asked to code this strategy!




function max_coin(coin, start, end){
	if(start > end) return 0;

	var pick_first = coin[start] + Math.min(max_coin(coin, start+2, end), max_coin(coin, start+1, end-1));
	var pick_last = coin[end] + Math.min(max_coin(coin, start+1, end-1), max_coin(coin, start, end-2));
		
	return Math.max(pick_first, pick_last);
}