// Template Literals

let firstname = "Dinesh";
let lastname = "Kumar";
let fullname = `${firstname} ${lastname}`;
console.log(fullname);

// Finding duplicate strings

let string = "kasdfgerhgeruthfxcvnhfdbgtuieydfhgdflaguietyuiejkasghfjg";

let letters = new Map();
for(let i=0; i<string.length;i++) {
   let letter = string[i];
  if(!letters.has(letter)){
     letters.set(letter,1);
  }
  else{
  	letters.set(letter, letters.get(letter)+1);
  }
}
console.log(letters);


// Map method using ARROW function

let values = [20, 40, 60, 80];
let doubles = values.map(n=>n*2);
console.log(doubles);

// Filter Method using ARROW function

let scores = [1,2,3,4,5,6,7,8];
let highscores = scores.filter(n=>n>2);
console.log(highscores);

// forEach Method using ARROW function

let numbers = [10,20,30,40,50];
numbers.forEach(n=>console.log(n));

// Spread Operator method

let a = [30, 40, 50];
let b = [10, 20, ...a];
console.log(b);

