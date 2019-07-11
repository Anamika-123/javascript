function createPattern(){
	var x = window.prompt("enter number of rows");
	var y = window.prompt("enter number of columns");
	var i,j;
	var n=x;
	console.log("anc");
	if(x==y){
		for(i=0;i<n;i++){
			for(j=0;j<n;j++){
				if(i==0 || i==(n-1) || j == n-i-1){
				 document.write("*");
				}
				else{
			    document.write("-");
		    }
			}
			document.write("</br>");
		}
  }
}