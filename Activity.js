// Function Declaration

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(24)); // => true
console.log(isEven(27)); // => false

// Function Expression

const myFunctionVar = function getNumber() {
  console.log(typeof funName === 'function'); // => true
  return 42;
}
console.log(myFunctionVar());    // => 42
console.log(myFunctionVar.name); // => 'getNumber'

console.log(typeof getNumber);   // => 'undefined'

// Shorthand method definition

const collection = {
  items: [],
  add(...items) {
    this.items.push(...items);
  },
  get(index) {
    return this.items[index];
  }
};

collection.add('C', 'Java', 'PHP');
console.log(collection.get(1)); // => 'Java

class Star {
  constructor(name) {
    this.name = name;
  }

  getMessage(message) {
    return this.name + message;
  }
}

const sun = new Star('Sun');
console.log(sun.getMessage(' is shining')); // => 'Sun is shining'

// Arrow function

const absValue = (number) => {
  if (number < 0) {
    return -number;
  }
  return number;
}

console.log(absValue(-10)); // => 10
console.log(absValue(5));   // => 5

class Numbers {
  constructor(array) {
    this.array = array;
  }
  addNumber(number) {
    if (number !== undefined) {
       this.array.push(number);
    } 
    return (number) => { 
      console.log(this === numbersObject); // => true
      this.array.push(number);
    };
  }
}
const numbersObject = new Numbers([]);
const addMethod = numbersObject.addNumber();

addMethod(1);
addMethod(5);
console.log(numbersObject.array); // => [1, 5]

// Generator function

const indexGenerator = function* () {
  let index = 0;
  while(true) {
    yield index++;
  }
};
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// new Function

function sum1(a, b) {
  return a + b;
}
const sum2 = function(a, b) {
  return a + b;
}
const sum3 = (a, b) => a + b;

console.log(typeof sum1 === 'function'); // => true
console.log(typeof sum2 === 'function'); // => true
console.log(typeof sum3 === 'function'); // => true
