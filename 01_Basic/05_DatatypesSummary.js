// Primitive 
// 7 Datatypes : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100.46;
const nameValue = "Vivek";

const isLogedOut = false;
const tempWeather = null;
let address;

const d1 = Symbol('01234');
const d2 = Symbol('01234');

// console.log(d1 == d2);

const bigNumber = 123456789109876543210n;

// console.log(typeof bigNumber);

//Reference/Non-Primitive 
//Array, Objects, Function
const benTen = ["HeatBlast", "DiamondHead", "FourArms"];

const details = {

    name: "Vivek Prajapati",
    age: 23,
    job: false
}

const myDetails = function() {
    console.log("Vivek Prajapati");    
}

console.log(typeof myDetails);

// https://262.ecma-international.org/5.1/#sec-11.4.3
