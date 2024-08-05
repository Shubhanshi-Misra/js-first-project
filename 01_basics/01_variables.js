const accountId = 144553
let accountEmail = "hitesh@google .com"
var accountPassword = "12345"
accountCity = " Jaipur"
let accountState;
//js me semi colon lagao ya nahi lagao koi farak nahi padta hai

// accountId = 2// not allowed

accountEmail = "hc@hc.com"
accountPassword = "121212"
accountcity = "Delhi"

console.log(accountId);

/*
prefer not to use var because of issue
in  block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])