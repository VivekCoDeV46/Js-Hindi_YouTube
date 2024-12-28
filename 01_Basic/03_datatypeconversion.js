let score1 = "46"
let score2 = "46demon"
let score3 = null;
let score4 = undefined;
let score5 = false
let score6;

console.log(typeof score1);
console.log(typeof (score1));

console.log(typeof score2);
console.log(typeof (score2));

console.log(typeof score3);
console.log(typeof (score3));

console.log(typeof score4);
console.log(typeof (score4));

console.log(typeof score5);
console.log(typeof (score5));

console.log(typeof score6);
console.log(typeof (score6));


let inNumberScore1 = Number(score1);
let inNumberScore2 = Number(score2);
let inNumberScore3 = Number(score3);
let inNumberScore4 = Number(score4);
let inNumberScore5 = Number(score5);
let inNumberScore6 = Number(score6);

console.log(typeof inNumberScore1);
console.log(typeof inNumberScore2);
console.log(typeof inNumberScore3);
console.log(typeof inNumberScore4);
console.log(typeof inNumberScore5);
console.log(typeof inNumberScore6);

console.log(inNumberScore1);
console.log(inNumberScore2);
console.log(inNumberScore3);
console.log(inNumberScore4);
console.log(inNumberScore5);
console.log(inNumberScore6);

//"33" = 33
//"33" = NaN
// true = 1; false = 0
//Null = 0
//Undefined = NaN
//only variable = NaN

let inLoggedIn = 1;
let inLoggedIn2 = "";
let inLoggedIn3 = "Vivek";
let booleanInLoggedIn = Boolean(inLoggedIn)
let booleanInLoggedIn2 = Boolean(inLoggedIn2)
let booleanInLoggedIn3 = Boolean(inLoggedIn3)
 console.table([typeof booleanInLoggedIn, typeof booleanInLoggedIn2, typeof booleanInLoggedIn3]);
 console.table([booleanInLoggedIn, booleanInLoggedIn2, booleanInLoggedIn3]);

 //1 = true; 0 = false
 //"" = false
 // "Vivek" = true

 let someNumber = 33;
 let StringSomeNumber = String(someNumber);

 console.log(StringSomeNumber);
 console.log(typeof StringSomeNumber);