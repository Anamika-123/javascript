var userClass = function(name,age){
	this.name = name;
	this.age = age;

}

userClass.prototype.compare = function(user)
{
	if (this.age<user.age){
		document.write(this.name  + "is younger than" + user.name+"<br>");
	}
	else{
		document.write(this.name +"is older than"+user.name+"<br>");
	}
}

userClass.prototype.nameadult = function(adult1,adult2){

	if(this.age > 18  && adult1.age > 18 && adult2.age >18){
	document.write("All are adults");
	}
	else if(this.age <18 && adult1.age > 18 && adult2.age > 18 ){
	document.write(adult1.name +" "+"and"+" "+adult2.name +" "+"are adults");
	}
	else if(this.age > 18 && adult1.age > 18 && adult2.age <18){
	document.write(this.name +" "+"and "+" "+adult1.name +" "+"are adults");
	}
	else if(this.age > 18 && adult1.age  < 18 && adult2.age > 18){
	document.write(this.name +" "+"and"+" "+adult2.name +" "+"are adults");
	}
	else{
	document.write("no one is adult");
	}
}


var user1 = new userClass("anamika",19);
var user2 = new userClass("ritika",17);
var user3 = new userClass("mayank",25);
user1.compare(user2);
user1.nameadult(user2,user3);
