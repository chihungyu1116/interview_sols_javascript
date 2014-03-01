// q4
// an interger P is a whole square if its a square of some integer
// [4...17] should return 3

function solution(A, B) {    
    if(A < 0 && B < 0){
        return 0;
    }
    
    A = A < 0 ? 0 : A;
    B = B < 0 ? 0 : B;
    
    return Math.abs(parseInt(Math.sqrt(B)) - parseInt(Math.sqrt(A))) + 1
}
