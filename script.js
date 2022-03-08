console.log('JS OK!');


// Scrivi un programma che stampi in console i numeri da 1 a 100
// multipli di 3 stampi “Fizz” 
// multipli di 5 stampi “Buzz”
// multipli sia di 3 che di 5 stampi “FizzBuzz”
// stili differenti CSS

// Come faccio a sapere se un numero è divisibile per un altro? 
// Abbiamo visto qualcosa di particolare che possiamo usare? 
// Come creare nuovi elementi html e appenderli al container?



// Stampi in console i numeri da 1 a 100
const divNumber = document.querySelector("#number");
const num = document.querySelector (".num");
//let i = 1

let element;

for (let i = 1; i <= 100; i ++) {
  
    
    // multipli di 3 stampa “Fizz” 
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
        element = `<div class="fizzbuz"> FizzBuzz </div>`;
    } else if(i % 3 == 0) { 
        console.log("Fizz"); 
        element = `<div class="fizz"> Fizz </div>`;
    }
    
    // multipli di 5 stampa “Buzz”
    else if(i % 5 == 0) { 
        console.log("Buzz");  
        element = `<div class="buzz"> Buzz </div>`;
    }
    // multipli sia di 3 che di 5 stampa “FizzBuzz” 
    else {
        console.log(i)
        element = `<div class="num"> ${i} </div>`;
       
    }
    divNumber.innerHTML += element;       
}







