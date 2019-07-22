function arry(){
	var a = [];
	var i,j,n,inputNumber, count = 0;
	for(i=0;i<=10;i++){
	 var inputNumber  = window.prompt("enter the numbers");
   a.push(inputNumber);
  }
  var n = window.prompt("enter the repeatative number");
  for(j=0;j<=10;j++){
    if(Math.abs(a[j]) == Math.abs(n)) {   
      count ++;
    } 
  }
  document.write(count);
}


// if(((a[j] < 0)? a[j] * -1 : a[j] ) == ((n < 0)? n * -1 : n )) {   