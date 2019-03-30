var Checkbox = function(){
}

Checkbox.prototype.bindEvents = function(){
 var Outerscope = this;
 $('.parentInputClass').click(function(){
 	Outerscope.togglecheckboxes($(this));
 });
}

Checkbox.prototype.togglecheckboxes = function(selectedelement){
var childrenCheckboxClass = selectedelement.attr('data-children-class');
$('.' + childrenCheckboxClass).toggle();
$('.' + childrenCheckboxClass).find('input').prop('checked', false);
}

var parentchild = new Checkbox();
parentchild.bindEvents();