function middle(){
	var a = [];
	var n = window.prompt("enter the length of an array");

	for(i=0;i<=n;i++){
	  var inputElement = window.prompt("enter the numbers for an array");
	  a.push(inputElement);

	}
	if(n%2 == 0){
		document.write(+a[n/2]+ " , " +  a[n/2-1]);

     }
	
	if(n%2 !== 0){
		document.write("middle number is " + a[n/2]);
    }


	}
	