var Checkbox = function(){
}

Checkbox.prototype.bindEvents = function(){
 var Outerscope = this;
 $('#clr').click(function(){
 	Outerscope.selected($(this));
 });
 $('#drink').click(function(){
 	Outerscope.selected($(this));
 });
 $('#movie').click(function(){
 	Outerscope.selected($(this));
 });
}

Checkbox.prototype.selected = function(e){

	var childCheck = e.attr('data-check-all');
	$('.' + childCheck).toggle();
	if(e.prop('checked')){
	  $('.datacheck').find('.data-color').prop('checked',false);
    }
	else{
		// $('.datacheck').prop('checked', true);
	}
}

var parentchild = new Checkbox();
parentchild.bindEvents();