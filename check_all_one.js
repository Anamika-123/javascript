var checkAllNone = function(){

}
checkAllNone.prototype.bindEvents = function(){
	var outerScope = this;

	$("#all").click(function(){
		alert("hiii");
	  outerScope.checkAll();
    });

	$("#none").click(function(){
	  outerScope.checkNone();
    });
}

checkAllNone.prototype.checkAll = function(){
   $('input[type="checkbox"]').prop("checked",true);
 }
checkAllNone.prototype.checkNone = function(){
   $('input[type="checkbox"]').prop("checked",false);
}

var checkInstance = new checkAllNone();
checkInstance.bindEvents();