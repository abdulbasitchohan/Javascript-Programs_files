// Print numbers from 1 to 20.

// for (let count = 1; count <= 20; count++) { 
    // console.log(count);
// }


// Print even numbers from 2 to 20.


// let even = 1;
// for (even; even <= 10; even++) {
//   //  console.log("2 x "  + even + " = " + 2 * even);
    
// }


// Print numbers from 10 to 1 (reverse).

// for (let count = 10; count >= 0; count--) { 
//     console.log(count);
// }


// Print the multiplication table of 7.

// let num = 1
// for (num; num <= 10; num++) {
//     console.log("7 x " + num + " = " + 7 * num);
       
// }


// let num = 0;
// for (num; num <= 50; num++) {
//     console.log(num + num);    
// }


// let sum = 0;

// // loop from 1 to 50
// for (let num = 1; num <= 50; num++) {
//     sum = sum + num; // or sum += i
// }

// console.log("Sum of first 50 natural numbers:", sum);



// Print each character of a string: "JavaScript".

// let text = "JavaScript";

// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// }



// // Emoji Repeater using for-loop

// let emoji = prompt("Enter an emoji (Exp. 😀):");
//  let time = prompt("Enter how many times to repeat it:");

// let result = "";
// if (time <= 15) {
    
//     for (let i = 0; i <= time; i++) {
//         result += emoji;
//     }
//     alert(result);
// }else{
//     alert("Please Enter the 1 to 15 Number ❗")
// }


let star = 0;
for (star ; star <= 5; star++) {
    let row = "*";

    for (let i = 1; i <= star; i++) {
        row += "*";
    }
    
    console.log(row);
}






