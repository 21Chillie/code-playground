function multiplyBy(factor) {
	return function (num) {
		console.log(`${factor} and ${num}`);
		return num * factor;
	};
}
const triple = multiplyBy(3);
console.log(triple(5)); // 15

const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2); // [2, 4, 6]
const evens = numbers.filter((n) => n % 2 === 0); // [2]

(function () {
	const secret = "shh!";
	console.log(secret);
})();

const obj2 = {
	name: "Bob",
	greet() {
		console.log(this.name);
	}, // "Bob"
};

function introduce() {
  console.log(`I'm ${this.name}`);
}

const person = { name: "Bob" };
introduce.call(person); // "I'm Bob"
