function repeat(){
	
	var a = Array.from(Array(10));
	var b = Array.from(Array(10), ()=>0);
	var i,j,inputNumber;
	for(i=0;i<a.length;i++){
		var inputNumber = window.prompt("enter the numbers");
		a[i] = inputNumber;
        b[a[i]] = b[a[i]] + 1;
    }
    for(i=0;i<b.length;i++){
    	if(b[i]>0){
    	  document.write(i+"is repeating"+ b[i]+"<br>" );
        }
    }   
    max=b[0];
    maxindex = 0;
    for(i=0;i<b.length;i++){
    	if(b[i]>max){
    		max=b[i];
    		maxindex = i;
    	}
    }
    document.write("MAXIMUM NUMBER IS"+maxindex);

}
