const accountId = 464646;
let accountEmail = "vivek@google.com";
var accountPassword = "12346";
accountCity = "Mumbai";
let accountState; //Output is Undefined

// accountId = 464640; //Not allowed or Output is TypeError

accountEmail = "vivek@yahoo.com"
accountPassword = "123456"
accountCity = "Kandivali"

console.log(accountId);

/*Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
