var app = angular.module('RegisterController', function() {
	this.firstName = {};
	this.lastName = {};
	this.username = {};
	this.password = {};
	this.register = function(user)
	{
		user.firstName.push(this.firstName);
		user.lastName.push(this.lastName);
		user.email.push(this.email);
		user.password.push(this.password);
	};
});