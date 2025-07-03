const accountId = 123456
let accountEmail = "abc@gmail.com"
var accountPassword = "1234"
accountCity = "Pune"
let accountState


// accountId = 2 // not allowed 

accountEmail = "shri@abc.com"
accountPassword = "7890"
accountCity = "Mumbai"

 console.log(accountId);

 /*
prefer not to use var
because of the issue in block scope "{}" and functional scope 
There's also one possibility that a variable can be declard without var
 */ 

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
 