function createPattern(){
	var x = window.prompt("enter number of rows");
	var y = window.prompt("enter number of columns");
	var n = x;
	if(x==y){
		for(i=0;i<n;i++) {
			for(j=0;j<n;j++) {
				if(j==0 || j==(n-1) || j== i) {
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
Good (100/100)