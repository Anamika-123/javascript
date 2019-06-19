var User = function(){

}

User.prototype.bindEVents = function(){
	var outerScope = this;
	outerScope.saveRow();
	outerScope.editRow();
	outerScope.updateRow();

}

User.protoype.addRow = function(){
	this.rowHtml = $('<tr/>',{'class':''}).append($('<td/>',{'class':''})).append($('<input/>',{'class':'inputName'})).append($('<td/>',{'class':''})).append($('<input/>',{'class':'inputEmail'})).append($('<td/>',{'class':''})).append($('<button/>',{'class':'buttonSave'},'value':'save')).append($('<button/>',{'class':'buttonEdit hide-me'},'value':'edit')).append($('<button/>',{'class':'buttonUpdate hide-me'},'value':'update'))
  $("#users_contact").append(this.rowHtml);
}

User.prototype.saveRow = function(){
	this.rowHtml.find(".buttonSave").click(function(){
	var saveInputName =	$(this).parents('<tr>').find('.inputName');
	saveInputName.replace( saveInputName.text());

	var saveInputEmail = $(this).parents('<tr>').find('inputEmail');
	saveInputEmail.replace(saveInputEmail.text());
    this.rowHtml.find('.buttonEdit').removeClass('hide-me');
    this.rowHtml.find('.buttonUpdate').removeClass('hide-me');
    $(this).addClass('.hide-me');
    })
}

User.prototype.editRow = function(){
	this.rowHtml.find(".buttonEdit").click(function(){
		var editInput1 = $('<input type=text>');
		var editInput2 = $('<input type=text>');

		var editInputname = $(this).parents('<tr>').find('.inputName');
		var editInputEmail = $(this).parents('<tr>').find('.inputEmail');
		var editInputext1 = editInputname.text();
		var editInputext2 = editInputEmail.text();
		var blankInputext1 = editInputext1.text(" ");
		var blankInputext2 = editInputext2.text(" ");
		editInput1.append(editInputext1);
		editInput2.append(editInputext2);
  });
}

User.prototype.updateRow = function(){
 this.rowHtml.find(".buttonUpdate").click(function(){

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