// Template Literals

let firstname = "Dinesh";
let lastname = "Kumar";
let fullname = `${firstname} ${lastname}`;
console.log(fullname);

// Prototype example - missing property in function using prototype
function Employee(name, age) {
  this.name = name,
  this.age = age
}

Employee.prototype.salary=50000;
Employee.prototype.details = function() {
  return this.name+" "+this.age+" "+this.salary;
}

let user1 = new Employee("Dinesh", 30);
let user2 = new Employee("Nalan", 30);
console.log(user1.details());

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

// Duplicate Strings another method

const str = "afewreociwddwjej";
function findRepeat(str) {
  const arr = str.split('').sort();
  const hash = new Map();
  const result = [];
  // If repeat the value is false, if no repeat the value is true
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (!v)
      result.push(k);
  });
  return result;
}
console.log(...findRepeat(str));

// Duplicate Strings another method

let data = "aasdasasddfgfghfghfghfgghghgh";
let obj={};
for(let i of data) {
    obj[i]=true;
}
let result = Object.keys(obj).sort().toString();

// find Dupicate string in simple method

const dup = "assdfsdklfjsdfsdjkfjkfjglljlsdlfgj";
console.log(...[new Set(dup)].sort().toString());

// Need to sum the object keys with values 

let x = {
  a:10,
  b:20,
  c:30
}
let sum=0;
for(let key in x) {
  sum += x[key]
}
console.log(sum);


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

