const player = 46;

console.log(player);

const balance = new Number(46);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherPlayer = 46.46;
console.log(otherPlayer.toPrecision(2));
const otherPlayer2 = 46.66;
console.log(otherPlayer2.toPrecision(2));
const otherPlayer3 = 146.96;
console.log(otherPlayer3.toPrecision(4))

const price = 100000;
console.log(price.toLocaleString());
console.log(price.toLocaleString('en-IN'));


//```````````````````````````````````` Maths ````````````````````````````````````
console.log(Math);
console.log(Math.abs(-46));
console.log(Math.abs(46));
console.log(Math.round(46.2));
console.log(Math.round(46.8));
console.log(Math.ceil(46.2));
console.log(Math.ceil(46.8));
console.log(Math.floor(46.2));
console.log(Math.floor(46.8));

console.log(Math.min(5,7,3,6,3,2,1.5));
console.log(Math.max(5,7,3,6,3,2,1.5));

console.log(Math.random());
console.log(Math.random());
