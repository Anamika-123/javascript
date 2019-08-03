var checkbox = function(){

}
checkbox.prototype.bindEvents = function(){
	var outerScope = this;
	$(".parentInputClass").click(function(){
		var e = $(this).data("children-class");
		outerScope.toggleCheckBox(e);
		outerScope.deselectedCheckbox(e);
    });
}

checkbox.prototype.toggleCheckBox = function(e){
	$("." +e).toggle();

}

checkbox.prototype.deselectedCheckbox = function(e){
	$("."+e).find('input[type="checkbox"]').prop("checked",false);

}


var checkInstance = new checkbox();
checkInstance.bindEvents();