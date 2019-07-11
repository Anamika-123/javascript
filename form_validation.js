var Form = function(){
	this.arr = [];
}
Form.prototype.bindEvents = function(){
	outerScope = this;
	$("#gobutton").click(function(){
		outerScope.validLoginId();
		outerScope.validName();
		outerScope.validEmail();
	  outerScope.validHomePage();
		outerScope.showAlert();
  });
}

Form.prototype.validName = function(){
 this.nameType = $("#inputname").val() == '';
 if(this.nameType){
 this.arr.push("name cant be blank")
}
}
Form.prototype.validEmail = function(){
	this.emailType = $("#inputemail").val() == '';
	if(this.emailType){
  this.arr.push("email cant be blank");
}
}

Form.prototype.validLoginId = function(){
	// this.loginType = $("#inputId").val() == '';
	// if(this.loginType){
	// 	this.arr.push("login id cant be blank");
	// }

}

Form.prototype.validHomePage = function(){

}

Form.prototype.aboutMe = function(){

}

Form.prototype.notify = function(){


}

Form.prototype.showAlert = function(){
 this.arrJoin = this.arr.join();
	alert(this.arrJoin);
	this.arr = [];
}	


$(document).ready(function(){
	var validInstance = new Form();
	validInstance.bindEvents();
});