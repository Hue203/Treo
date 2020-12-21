// --- ASSIGNMENT 1  ---

function getAverage() {
	const obj = { x: 3.6, y: 7.8, z: 4.3 };
	// const x = obj.x;
	// const y = obj.y;
	// const z = obj.z;
	// YOUR CODE STARTS HERE
	const { x, y, z } = obj;

	return Math.floor((x + y + z) / 3.0);
}
console.log(getAverage());

//   --------------

function getAddress() {
	let coderschool = {
		city: 'HCMC',
		country: 'Vietnam',
		address: {
			number: 12,
			street: 'Ton Dan',
			district: '4',
		},
	};
	// YOUR CODE STARTS HERE
	const {
		city,
		country,
		address: { street },
	} = coderschool;

	return city === 'HCMC' && country === 'Vietnam' && street === 'Ton Dan';
}
console.log(getAddress());

//   --------------

function getElements() {
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	// const first = arr[0];
	// const third = arr[2];
	// const fourth = arr[3];
	// YOUR CODE STARTS HERE
	const [first, , third, fourth] = arr;
	return { first, third, fourth };
}
console.log(getElements());

//   --------------

function getNestedElements() {
	const food = [
		['carrots', 'beans', 'peas', 'lettuce'],
		['apples', 'mangos', 'oranges'],
		['cookies', 'cake', 'pizza', 'chocolate'],
	];
	// const carrots = food[0][0];
	// const cookies = food[2][0];
	// const mangos = food[1][1];
	// YOUR CODE STARTS HERE
	const [[carrots], [, mangos], [cookies]] = food;
	return { carrots, cookies, mangos };
}
console.log(getNestedElements());

// --- ASSIGNMENT 2  ---

function restParameters(first, ...rest) {
	console.log(arguments);
	console.log({ first, rest });
	return rest[0] === 1 && rest[1] === 2;
}

console.log(restParameters(0, 1, 2));

//   --------------

function ontoAnObject() {
	const array = [1, 2, 3, 4, 5, 6];
	const object = {};
	// object.one = array[0];
	// object.two = array[1];
	// object.three = array[2];
	// object.rest = array.slice(3);
	// YOUR CODE STARTS HERE
	[object.one, object.two, object.three, ...object.rest] = array;
	return object;
}
console.log(ontoAnObject());

//   --------------

function findTheMax() {
	const arr1 = [1, 7, 2, 44];
	const arr2 = [1, 9, 5, 8];
	// Using Math.max() and spread operator
	// to find the maximum number in both arrays
	return Math.max(...arr1, ...arr2);
}
console.log(findTheMax());

//   --------------

function concatenateArrays() {
	const arr1 = [0, 1, 2, 3];
	const arr2 = [4, 5, 6];
	const arr3 = [7, 8, 9];
	// Merge those arrays into one using spread operator in one statement
	const result = [...arr1, ...arr2, ...arr3];
	return result;
}
console.log(concatenateArrays());

//   --------------

function mergeObjects() {
	// what does this return?
	const obj1 = {
		a: 'a from obj1',
		b: 'b from obj1',
		c: 'c from obj1',
		d: {
			e: 'e from obj1',
			f: 'f from obj1',
		},
	};
	const obj2 = {
		b: 'b from obj2',
		c: 'c from obj2',
		d: {
			g: 'g from obj2',
			h: 'h from obj2',
		},
	};
	const result = { ...obj1, ...obj2 };
	console.log(result);
	// Put your answer in to make it returns true
	return (
		result.a === 'a from obj1' &&
		result.b === 'b from obj2' &&
		result.c === 'c from obj2' &&
		result.d.e === undefined &&
		result.d.f === undefined &&
		result.d.g === 'g from obj2' &&
		result.d.h === 'h from obj2'
	);
}

// --- ASSIGNMENT 3  ---

function multiArgument() {
	// refactor to an arrow function
	const divide = (a, b) => a / b;
	// YOUR CODE STARTS HERE
	return divide(40, 10);
}
console.log(multiArgument());

//   --------------

function spreadWithArrow() {
	// refactor to an arrow function
	const asArray = (...args) => args;
	// YOUR CODE STARTS HERE
	return asArray(1, 2, 3, 4);
}
console.log(spreadWithArrow());

//   --------------

function withObject() {
	// refactor to an arrow function
	const getObject = (favoriteCandy) => ({ favoriteCandy });
	// YOUR CODE STARTS HERE
	return getObject('twix');
}
console.log(withObject());

//   --------------

function withMultiLineExpression() {
	// refactor to a arrow functions
	const getString = (name) => {
		return `
          Hello there ${name}
          How are you doing today?
        `;
	};
	// YOUR CODE STARTS HERE
	return getString('Ryan');
}
console.log(withMultiLineExpression());

//   --------------

function curryAdd() {
	// refactor to a arrow functions
	// YOUR CODE STARTS HERE

	const curryAddition = (a) => (b) => (c) => a + b + c;
	return curryAddition(9)(3)(5);
}
console.log(curryAdd());
