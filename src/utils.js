class Position {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Size {
	constructor(w, h) {
		this.width = w;
		this.height = h;
	}
}

function select(elem) {
	return document.querySelector(elem);
}

function selectAll(elem) {
	return document.querySelectorAll(elem);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function calculateAngel(p1, p2) {
	return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

function calculateDistance(p1, p2) {
	return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

export {
	Position,
	Size,
	select,
	selectAll,
	getRandomInt,
	getRandomArbitrary,
	calculateAngel,
	calculateDistance
};