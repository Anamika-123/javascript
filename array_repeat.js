function repeat(){
	
	var a = Array.from(Array(10));
	var b = Array.from(Array(10), ()=>0);
	var i,j,inputNumber;
	for(i=0;i<a.length;i++){
		var inputNumber = window.prompt("enter the numbers");
		a[i] = inputNumber;
        b[a[i]] = b[a[i]] + 1;
    }
    for(i=0;i<a.length;i++){
     for(i=0;i<b.length;i++){
     	document.write(a[i]+"is repeating"+b[a[i]]+"times</br>");
     }
    }
     for(i=0;i<b.length;i++){
     	// document.write("fbdfs"+b.findIndex()+"are unique numbers"+"</br>");
     }
}