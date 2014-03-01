// number sibling
// 123 is sibling of 321 and 213, etc
// 553 is sibling of 355 and 535, etc
// write a function that returns the biggest sibling

function solution(N) {
    // only found time o(n) and space o(1) solution
    
    var n_str = N.toString(),
        n_str_len = n_str.length;
        
    if(n_str_len > 8) {
        return -1;
    }
    
    var arr = [],
        result = "",
        arr_len, i, j, value;
    
    for(i = 0; i < n_str_len; i++){ // create an arr of size 10 and each position represents number value 0 to 9
        value = parseInt(n_str[i]);
        arr[value] = (typeof arr[value] === "undefined") ? 1 : (arr[value] + 1);
    }
    arr_len = arr.length;
    
    for(i = arr_len; i--;){
        value = arr[i];
        if(typeof value !== "undefined"){
            for(j = 0; j < value; j++){
                result += i.toString();
            }
        }
    }
    
    return parseInt(result);
}
