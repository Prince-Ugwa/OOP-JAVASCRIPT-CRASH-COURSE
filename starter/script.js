'use strict';
/*
//////////////////////////CONSTRUCTOR FUNCTION/////////////////////////////
const person = function (firstName, birthYear) {
  //these properties will be available on all instances created throught this constructor function
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this);
};
// Never to this!
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// };
const prince = new person('Prince', 1999);
// console.log(prince);
//note: never create a method inside of a constructor function
//instead we use prototype and or prototype inheritance..
//

 
// 1.	A new empty {}object is created
// 2.	The function is call with the 'new' keyword, and then ‘this keyord’  is set to the newly created object (the empty object)
// 3.	 This newly created object is linked to a prototype
// 4.	The object that was created in the beginning will then be returned automatically. At this point the object do  not need to be empty
 

const helen = new person('Helen', 2012);

const victoria = new person('Victoria', 2008);
console.log(victoria, helen);

//checking for an instances in javascript
console.log(helen instanceof person);

//NOTE: FUNCTION CONSTRUCTORS ARE NOT REALLY A FEATURE OF THE JAVASCRIPT LANGUAGE
// INSTEAD THEY ARE PATTERN THAT WERE DEVELOPED BY OTHER DEVELOPERS AND NOW EVERYONE SIMPLY USE IT.
//JAVASCRIPT does not have classses in terms of traditional oop.

/////////////////////////////////////////////////////////////////////////////////
//////////////////////prototypes and prototype inheritance..////////////////////
// Each function in JavaScript has a property called prototype and that includes constructor function too
// The prototype is an object that is associated with every functions and object by default

console.log(person.prototype);

person.prototype.calcAge = function () {
  console.log(2027 - this.birthYear);
  //the 'this' keyword is set to the object that  is calling the method
};
prince.calcAge();
victoria.calcAge();
//the prince  and victoria object are connected to the person that is why they can have
// access to any methods located inside the prototype of persons

/// each object has a property call __proto__
console.log(prince.__proto__);
console.log(prince.__proto__ === person.prototype);
console.log(person.prototype.isPrototypeOf(prince)); // test if it a prototype of another object
console.log(person.prototype.isPrototypeOf(helen)); // test if it a prototype of another object
console.log(person.prototype.isPrototypeOf(person)); // test if it a prototype of another object

//NOTE: person.prototype() is not a prototype of person but it is what will be uses as
// prototype of all the the objects that are created  with the person constructor function

//setting properties on the prototype
person.prototype.species = 'Homo Sapiens';
// console.log(prince, helen);
console.log(helen.species, victoria.species);
// // the species property is not really a direct property of the person

//own properties are only the properties that are declared directly in the object
console.log(prince.hasOwnProperty('firstName')); // chcking for the own properties
console.log(prince.hasOwnProperty('species'));

// //hasOwnProperty() is use to check direct property of an object
console.log(prince.__proto__);
console.log(prince.__proto__.__proto__);

//this is the top of the prototype chain
console.log(prince.__proto__.__proto__.__proto__);
console.dir(person.prototype.constructor);

const arr = [2, 5, 8, 6, 3, 2, 5, 8];
const arr2 = [1, 1, 2, 2, 3, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Adding prototype  to the array
//all arrays will inherit this prototype
// but this should not not be over practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
console.log(arr2.unique());

// const testPerson = function (fname, lName, birthYear) {
//   (this.fname = fname), (this.lName = lName), (this.birthYear = birthYear);
//   // console.log(this);
// };

// const john = new testPerson('John', 'Mary', 2012);
// console.log(john);

// testPerson.prototype.calcAge = function () {
//   console.log(2027 - this.birthYear);
// };

// john.calcAge();
// //If an object cannot be find   a certain prototype  JavaScript will look into its prototype eg  the calc age
// // this is what we call a prototypal inheritance.
// // the john object inherit the calcAge methods from its prototype or it delegated calcage functionality to
// // its prototype.
// // we can create as many object as we like from this protype

// const amina = new testPerson('Amina', 'Dahiru', 2000);
// console.log(amina);
// amina.calcAge();

const h1 = document.querySelector('h1');
console.log(h1);

//CHALLENGE 1
 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property.
//  The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5,
//  and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake'
//  multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
 

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new car('Bmw', 120);
const mercedes = new car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
*/

////////////////////////ES6 CLASSES////////////////////////
// Classes are a template for creating objects. They encapsulate data with
//  code to work on that data.Classes in JS are built on prototypes but also have
//   some syntax and semantics that are not shared with ES5 class-like semantics.

// Classes are in fact "special functions", and just as you can define function
// expressions and function declarations, the class syntax has two components:
// class expressions and class declarations.
// classes has no argument

//class expression
// const personCl = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //we do not have to manually  write the protoype property in classes instead
//   //we write the ouside of the constructor function and then
//   // will atomaically be added to prototype of the class
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet = function () {
//     console.log(`Helloo ${this.firstName}`);
//   };
//   get age() {
//     return 2037 - this.birthYear;
//   }
// };

// const prince = new personCl('prince', 1999);
// console.log(prince);
// // prince.calcAge();
// prince.greet();
// console.log(prince.age);
// console.log(prince.__proto__ === personCl.prototype);

class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance method
  //we do not have to manually  write the protoype property in classes instead
  //we write the ouside of the constructor function and then
  // will atomaically be added to prototype of the class
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet = function () {
    console.log(`Helloo ${this.fullName}`);
  };
  get age() {
    return 2037 - this.birthYear;
  }
  // set a property that already exist
  set fullName(name) {
    console.log(name);
    //when we have a setter that is adding a property that already exist we include underscore to before the property name.this is just a convention for the variable name to avoid conflict
    // as a convension to avoid naming conflict
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name `);
  }
  get fullName() {
    return this._fullName;
  }
}

const prince = new personCl('Prince Odiniya', 1999);
console.log(prince);
// prince.calcAge();
prince.greet();
console.log(prince.age);
console.log(prince.__proto__ === personCl.prototype);

// note: we can use .prototype to add methods
// personCl.prototype.greet = function () {
//   console.log(`Helloo ${this.firstName}`);
// };
// prince.greet();

const jane = new personCl('Jane Mark', 2005);

/////////////////////GETTERS AND SETTERS////////////////////////
const account = {
  owner: 'Prince',
  movement: [200, 100, 50],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  //any setter will need to have at least one parameter
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest); // we do not call the latest as a method instead we write it as if it was a property

// note that the getters and setters are not method bt properties.
account.latest = 250;
console.log(account.movement);

/////////////////////////STATIC METHOD////////////////////

// static method is attached to the entire constructor(array constructor) and not the prototype of the constructor
//therefore all arrays do not inherit the method

// .from, parseFloat etc
console.log(Array.from(document.querySelectorAll('h1')));

// we can not use static method on the array
// const stat = [1, 2, 3].from();
// console.log(stat);

// personCl.hey = function () {
//   console.log('hey theere 😘');
// };
// personCl.hey();

// jane.hey(); // the hey method is not available on the prototype

///////////////////////////////////OBJECT.CREATE/////////////////////
//there is no prototype involve and no constructor function involved and no new
// we use the object.create to manually set the prototype of an object to any other object  we want.

const personProto = {
  calcAge() {
    console.log(2027 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const matthew = Object.create(personProto);

console.log(matthew);

matthew.name = 'matthew';
matthew.birthYear = 2004;
matthew.calcAge();

console.log(matthew.__proto__ === personProto);

const jude = Object.create(personProto);
jude.init('jude', 1998);
jude.calcAge();
console.log(jude);

//////////// key note: the object.create  creates a new object and the ///////
/////////// prototype of that object is the object that we pass in //////////

/*  challenge 2
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  get speedUs() {
    return `${this.make} is going at current speed of ${this.speed / 1.6} mi/h`;
  }

  set speedUs(curSpeed) {
    this.speed = curSpeed * 1.6;
  }
}

const ford = new Car('Ford', 120);

console.log(ford.speedUs);
ford.accelerate();
ford.brake();
ford.speedUs = 50;
console.log(ford);
*/
