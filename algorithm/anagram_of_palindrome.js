
// q2
// a string that is an anagram of a palidrome
// arrwwefefww is anagram of palidrome rwefwawfewr
// require o(n) time and o(1) space

function solution(S) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var numberAlphaBet = 26,
        arr = [],
        len = S.length,
        sIsEven = len%2 === 0,
        letterACharCode = 'a'.charCodeAt(),
        numberOfOdd, i, letter, charCode;
        
    // init array of size 26 to container a-z
    // fixed O(1) space
    for(i = 0; i < numberAlphaBet; i++){
        arr.push(0);
    }
    
    for(i = 0; i < len; i++){
        letter = S[i];
        charCode = letter.charCodeAt() - letterACharCode;
        arr[charCode] = arr[charCode] + 1;
    }
    
    numberOfOdd = countNumberOfOddInArr(arr);

    if( (sIsEven && numberOfOdd === 0) || (!sIsEven && numberOfOdd === 1)){
        return 1;
    } else {
        return 0;
    }
}


function countNumberOfOddInArr(arr){
    var odd = 0,
        len = arr.length,
        el,
        i;
    
    for(i = 0; i < len; i++){
        el = arr[i];
        if(el%2 === 1){
            odd++;
        }
    }
    return odd;