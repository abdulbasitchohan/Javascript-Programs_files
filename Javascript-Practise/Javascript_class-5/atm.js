let balance = 1000;

const SavedPin = 123;

let withdrawAmount; //withdrawAmount variable

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
        alert("Your balance is: $" + balance);
    }

    else if (choice === "2") {
        withdrawAmount = prompt("Enter your Withdraw Amount!");

        if (withdrawAmount > balance) {
            alert("Insufficient funds!");
        }else{   
            balance -= withdrawAmount;
            alert("Withdrawal successful! New balance: $" + balance);
        }

    }

    else {
    }
}

else {
    alert("Incorrect PIN!");

}

