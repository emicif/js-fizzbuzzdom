console.log('JS OK!');


// Scrivi un programma che stampi in console i numeri da 1 a 100
// multipli di 3 stampi “Fizz” 
// multipli di 5 stampi “Buzz”
// multipli sia di 3 che di 5 stampi “FizzBuzz”
// creare elementi DOM all'interno di un container
// stili differenti CSS





// Stampare in console i numeri da 1 a 100
const divNumber = document.querySelector("#number");


let element;

for (let i = 1; i <= 100; i ++) {
  

    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
        element = `<div class="fizzbuz"> FizzBuzz </div>`;
    } else if(i % 3 == 0) { 
        console.log("Fizz"); 
        element = `<div class="fizz"> Fizz </div>`;
    } else if(i % 5 == 0) { 
        console.log("Buzz");  
        element = `<div class="buzz"> Buzz </div>`;
    } else {
        console.log(i)
        element = `<div class="num"> ${i} </div>`;
    }
    divNumber.innerHTML += element;       
}







