var User = function(name,age){
	this.name = name;
	this.age = age;
}

User.prototype.compare = function(name,age){
	var outerScope = this;
if(this.age < user2.age ){
	document.write(this.name +"is younger than "+ user2.name);
}
else if (this.age > user2.age){
	document.write(this.name +"is older than "+ user2.name);
} 
else{
	document.write("no one is older");
}  

}
var user1 = new User("john",21);
var user2 = new User("marry",23);
user1.compare(user2);