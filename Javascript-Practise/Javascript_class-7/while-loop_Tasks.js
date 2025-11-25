// let num = 1;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }


// Print odd numbers from 1 to 15.
// METHOD NO : 1

// let odd = 1;

// while (odd <= 15) {
//     console.log(odd)
//     odd += 2;
// }


// Print odd numbers from 1 to 15. 
// METHOD NO : 2

// let odd = 1;
// while (odd <= 15) {
//     if (odd % 2 !==0) {
//         console.log(odd);
//     }
//     odd++;

// }



// let mutiply = 5;

//     while (mutiply <= 50) {
//         mutiply+=5;
//         console.log(`${mutiply}`);
//     }



// const password = 321;
// let UserPassword;

// while (password !== UserPassword) {
//     UserPassword = +prompt(`Enter Your Password ❗`);
//     if (password === UserPassword) {
//         alert("Access Granted ✅");
//     }
// }


// const SavedNum = 44;
// let GuessNum;
// GuessNum = prompt("Enter Guess Number for 1 To 100");
// while (SavedNum !== GuessNum) {

//     if (SavedNum !== GuessNum) {
//         GuessNum = +prompt(`They Are Wrong Try again ❗`)
//     }
// if (SavedNum === GuessNum) {
//     alert(`Congratulation 🎉 you Guess Wright Number✅`);
// }
// }


let Alarm;
const AlarmStop = "Stop"; 
while (Alarm !== AlarmStop) {
    alert("Wakup up ❗ ⏰");
    Alarm = prompt(`Type " Stop ❗ " to turn off the alarm.`);
}

