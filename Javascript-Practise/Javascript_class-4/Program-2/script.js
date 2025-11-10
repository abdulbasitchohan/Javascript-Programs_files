// Task 2
let savedEmail = "abdulbasit@gmail.com";
let savedPassword = 123;

let userEmail = prompt("Enter your email:");
let userPassword = prompt("Enter your password:");

//  Email and Password
let loginSuccess = userEmail == savedEmail + userPassword == savedPassword;

console.log("Login Successful:", loginSuccess);
