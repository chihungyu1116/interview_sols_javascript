
// q3
// given a non-empty zero indexed array A of N integers, returns the minimal positive integer that does not occur in A
// [1,3,6,5,7,8,9,13,15,5555,33434,31,2323,232,32,4,1,2] should return 10
// require time o(n) and space o(n)
// but it can be done in place

function solution(A) {    
    var len = A.length,
        arr = [],
        value, i;
    
    for(i = 0; i < len; i++){
        value = A[i];
        if(value > 0){
            arr[value] = true;
        }
    }
    for(i = 1; i < arr.length; i++){
        if(typeof arr[i] === "undefined"){
            return i;
        }
    }
    return i;
}