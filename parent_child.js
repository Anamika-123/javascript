var Checkbox = function(){
}

Checkbox.prototype.bindEvents = function(){
 var Outerscope = this;

 $('.parentInputClass').click(function(){
 	var childrenCheckboxClass = $(this).attr('data-children-class');
 	Outerscope.togglecheckboxes(childrenCheckboxClass);
 	Outerscope.deselectedcheckboxes(childrenCheckboxClass)
 });
}

Checkbox.prototype.togglecheckboxes = function(childrenCheckboxClass){
	$('.' + childrenCheckboxClass).toggle();
}

Checkbox.prototype.deselectedcheckboxes = function (childrenCheckboxClass){
	$('.' + childrenCheckboxClass).find('input').prop('checked', false);
}



var parentchild = new Checkbox();
parentchild.bindEvents();