// THIS IS NON PRIMITIVE = Object

// const UserInfo = {
    // Name : prompt("What's your Name."),
// Age : prompt("What's your Age."),
// IsStudent : prompt("Are you Student."),
// Id : prompt("Enter your id Number."),
// Nickname : prompt("What's your Nickname."),

// }

// console.log(UserInfo);
// console.log(Name, "| " + "Type : " + typeof Name + " " + Age + " " + IsStudent + " " + Id + " " + Nickname );


let Name = prompt("What's your Name.");
let Age = prompt("What's your Age.");
let IsStudent = prompt("Are you Student.");
let Id = prompt("Enter your id Number.");
let Nickname = prompt("What's your Nickname.");


// type casting

Name = String(Name);
Age = Number(Age);
IsStudent = Boolean(IsStudent);
Id = Number(Id);
Nickname = String(Nickname);



// User data Print
console.log(Name, "| " + "Type : " + typeof Name );
console.log(Age , "| " + "Type : " + typeof Age) 
console.log(IsStudent , "| " + "Type : " + typeof IsStudent) 
console.log(Id , "| " + "Type : " + typeof Id) 

