class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	login() {
		console.log(`${this.name} logged in.`);
	}

	logout() {
		console.log(`${this.name} logged out.`);
	}
}

const user1 = new User("Resky", "resky@example.com");
user1.login();
