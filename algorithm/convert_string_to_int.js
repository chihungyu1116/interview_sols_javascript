function convertStringToInt(str){
	var total = 0, sign = 1, i = 0, val;

	if(str[0] === '-') {
		sign = -1;
		i=1;
	}

	for(i;i<str.length;i++){
		val = str[i];
		total *= 10;
		if(val === '9') total+=9;
		else if(val === '8') total+=8;
		else if(val === '7') total+=7;
		else if(val === '6') total+=6;
		else if(val === '5') total+=5;
		else if(val === '4') total+=4;
		else if(val === '3') total+=3;
		else if(val === '2') total+=2;
		else if(val === '1') total+=1;
		else if(val === '0') total+=0;
		else return false;
	}

	return total*sign;
}

console.log(convertStringToInt('123567'));