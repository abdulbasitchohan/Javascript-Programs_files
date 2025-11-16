
// This is Balance for user 
let balance = 2000;

const SavedPin = 123

alert("Welcome To JS ATM");
let UserPin = Number(prompt("Enter Your PIN Code."));

if (SavedPin === UserPin) {
     let choice = prompt(
         "Welcome to JS ATM 💳\n\n" +
         "1️⃣ Check Balance\n" +
         "2️⃣ Withdraw\n" +
         "3️⃣ Deposit\n" +
         "4️⃣ Exit\n\n" +
         "Enter your choice (1-4):"
     );

  if (choice === "1") {
    alert("Your Balance is: $" + balance);
  }

 else if (choice === "2") {
    let withdrawAmount; //withdrawAmount Variable
    withdrawAmount = prompt("Enter your Withdraw Amount!");

    if (withdrawAmount > balance) {
        alert("Insufficient Funds!")
        
    }else{
        balance -= withdrawAmount;
        alert("Withdraw Successful !");
        alert("Your New Balance: $" + balance);
    }
   
}else{

}

if (choice === "4") {
    alert("Thanks For Use JS ATM.");
 }else{}



}else{
    alert("Incorrect PIN Code!");
}


