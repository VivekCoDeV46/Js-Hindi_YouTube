const name = "Vivek";
const repoGit = 3;

// console.log(name + " " + repoGit + " " + "Repo in Github");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoGit}`); //String interpolation

const player = new String("DemonOP-46");
console.log(player);
console.log(player[1]);
console.log(player.__proto__);

console.log(player.length);
console.log(player.toUpperCase());
console.log(player.charAt(4));
console.log(player);
console.log(player.indexOf("k"));

const newplayer = player.substring(0,3);
console.log(newplayer);

const anotherplayer = player.slice(-8,4);
console.log(anotherplayer);

const playerNumber = "    456    ";
console.log(playerNumber);
console.log(playerNumber.trim());

const url = "https://www.kyamalum.com/contact%20Me"

console.log(url.replace('%20','-'));

console.log(url.includes('kyamalum'));
console.log(url.includes('nhimalum'));

console.log(player.split('-'));

