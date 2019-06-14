var User = function(){

}

User.prototype.bindEVents = function(){
	var outerScope = this;

}

User.protoype.addRow = function(){
	this.rowHtml = $('<tr/>',{'class':''}).append($('<td/>',{'class':''})).append($('<input/>',{'class':'inputName'})).append($('<td/>',{'class':''})).append($('<input/>',{'class':'inputEmail'})).append($('<td/>',{'class':''})).append($('<button/>',{'class':'buttonSave'},'value':'save')).append($('<button/>',{'class':'buttonEdit hide-me'},'value':'edit')).append($('<button/>',{'class':'buttonUpdate hide-me'},'value':'update'))
  $("#users_contact").append(this.rowHtml);
}

User.prototype.saveRow = function(){
	$(".buttonSave").click(function(){
	var saveInputName =	$(this).parents('<tr>').find('.inputName');
	saveInputName.replace( saveInputName.text());

	var saveInputEmail = $(this).parents('<tr>').find('inputEmail');
	saveInputEmail.replace(saveInputEmail.text());

	})
}

User.prototype.editRow = function(){
	$(".buttonEdit").click(function(){
		var editInput = $('<input type=text>');
		var editInputname = $(this).parents('<tr>').find('inputName');
		var editInputEmail = $(this).parents('<tr>').find('inputEmail');
		var editInputext1 = editInputname.text();
		var editInputext2 = editInputEmail.text();
		var blankInputext1 = editInputext1.text(" ");
		var blankInputext2 = editInputext2.text(" ");
		blankInputext1.append(editInput);
		blankInputext2.append(editInput);
  });
}

User.prototype.updateRow = function(){
 $("buttonUpdate").click(function(){

 	var updateInputName = $(this).parents('<tr>').find('InputName');
 	updateInputName.replace(updateInputName.text());

 	var updateInputEmail = $(this).parents('<tr>').find('InputEmail');
 	updateInputEmail.replace(updateInputEmail.text());
 })

}


$(document).ready(function(){
 $('#add_new_row').click(function(){
 	var userInstance = new User();
 	userInstance.addRow();
 	userInstance.bindEVents();
  });
});