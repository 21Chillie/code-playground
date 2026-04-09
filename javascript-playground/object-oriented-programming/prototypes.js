class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

User.prototype.login = function () {
	console.log(`${this.name} has logged in`);
};

const user = new User("Chillie", "chillie@mail.com");

user.login();
