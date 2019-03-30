var Checkbox = function(){
}

Checkbox.prototype.bindEvents = function(){
 var Outerscope = this;
 $('.parentInputClass').click(function(){
 	Outerscope.selected($(this));
 });
}

Checkbox.prototype.selected = function(parentinputcheck){

	var childCheck = parentinputcheck.attr('data-children-class');
	$('.' + childCheck).toggle();
	$('.' +childCheck).find('input').prop('checked', false);
}

var parentchild = new Checkbox();
parentchild.bindEvents();