// Dates

// let myDate = new Date()
// console.log("toString :", myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 23);

// let myCreateDate = new Date(2024, 0, 23, 4 , 6);

// let myCreateDate = new Date(2024, 0, 23);

let myCreateDate = new Date("01-14-2024");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());
// console.log(newDate.getMonth() + 1);

// console.log(`Time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('defualt', {
    weekday: "long"
}));
