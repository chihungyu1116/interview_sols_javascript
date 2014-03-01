// check if two strings are anagram


function is_anagram(str1, str2){
  if(str1 && str2 && (str1.length === str2.length)){
    // we can sort then compare
    // or use hash
    
  if(str1.split('').sort().join() === str2.split('').sort().join()) return true;
    return false
  } else if(!str1 && !str2) {
    return true;
  } else {
    return false;
  }
}

is_anagram('abc','cba')