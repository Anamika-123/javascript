var Dynamic = function(){

}
Dynamic.prototype.bindEvents = function(){
var outerScope = this;
outerScope.addRow();

}
Dynamic.prototype.addRow = function(){
	$('#newrow').on('click', function(){
		$("#showtable").show();

	})

}


Dynamic.prototype.saveMe = function(){

}

Dynamic.prototype.deleteMe = function(){

}
Dynamic.prototype.updateMe = function(){

}



var dynamictable = new Dynamic();
dynamictable.bindEvents();
