function createPattern(){
	var x = window.prompt("enter number of rows");
	var y = window.prompt("enter number of columns");
	var n = x;
	if(x==y){
		for(i=0;i<n;i++) {
			for(j=0;j<n;j++) {
				if(j== i|| j==n-i-1) {
					document.write("*");
				}
				else {
					document.write('_');
				}
			}
			document.write("<br>");
		}
	}
}
