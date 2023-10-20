// var    --> scoped >> function in which its defined -- X
// let    --> scoped >> its block.
// const  --> scoped >> block  -- Used to define constants

// function sayHello (){
//   for(let i = 0; i<5 ; i++){
//     console.log(i);
//   }
//  console.log(i);

//   const x = 1;
//   x = 2;
// }

//sayHello();

// >>>>>>>>>>> **** Objects **** >>>>>>>>>>>>

// const person = {
//   name: "Mubashir",
//   walk: function() {},
//   talk () {}
// };

// person.talk();                   //. Notation
// person.name = "Mubi";            // Bracket [] Notation
// person['name'] = 'Mubi Cash';

// const targetedMember = 'name';
// person[targetedMember.value] = 'Mubashir Ali';

// >>>>>>>>>>> ******* "this" Keyword ******* >>>>>>>>>>>

// const person = {
//   name: "Mubashir",
//   walk() {
//     console.log(this);
//   }
// };

// person.walk();

// const walk = person.walk;
// // console.log(walk);

// walk();  // stand alone function using 'this' results in undefine or Window Object

// >>>>>>>>>>> ******* binding 'this' ******* >>>>>>>>>>>

// const walk2 = person.walk.bind(person);
// walk2();

// >>>>>>>>>>> ******* Arrow Functions ******** >>>>>>>>>>>

// const square = function(number){
//   return number * number;
// }

// console.log(square(5));

// const squareAf = (number) => number * number;

// console.log(squareAf(5));

// >>>>>>>>>>>>> EXAMPLE :

// const jobs = [
//   {id: 1, isActive:true},
//   {id: 2, isActive:true},
//   {id: 3, isActive:false}
// ]

// const activeJobs = jobs.filter(function(job) { return job.isActive; });
// const activeJobs2 = jobs.filter(job => job.isActive);      // filter 'jobs' where 'job' isActive = true

// console.log(activeJobs);
// console.log(activeJobs2);

// >>>>>>>>>>> ******* Arrow Functions WITH 'this' ******** >>>>>>>>>>>

// const person = {
//   talk() {
//     // var self = this;
//     setTimeout(() => {
//       console.log("this : ", this);
//     }, 2000);
//   },
// };

// person.talk();

// >>>>>>>>>>> ******* Array.map Method  {Template literals }******** >>>>>>>>>>>

// const colors = ["red", "green", "blue"];

// const items = colors.map((color) => "<li>" + color + "</li>");
// const items2 = colors.map((color) => `<li>${color}</li>`);

// console.log(items);
// console.log(items2);

// >>>>>>>>>>> ******* Object Destructuring ******** >>>>>>>>>>>

// const address = {
//   street: "Lane 09",
//   city: "Karachi",
//   country: "Pakistan",
// };

// // old approach
// const street1 = address.street;
// const city1 = address.city;
// const country1 = address.country;

// // object Destructuring

// const { street, city, country } = address;

// const { street: st, city: ct } = address;

// console.log(`Street:${st}, City: ${ct}`);

// >>>>>>>>>>> ******* Spread Operator ******** >>>>>>>>>>>

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combinedNew = [...first, "A", ...second, "B"];

// console.log(combined);
// console.log(combinedNew);

// // Easily clone an array using Spread Operator

// const clone = [...first];

// console.log(first);
// console.log(clone);

// const first = { name: "Mubashir" };
// const second = { instructor: "Mosh" };

// const combined = { ...first, ...second, location: "Karachi" };

// console.log(combined);

// >>>>>>>>>>> ******* Classes in JavaScript ******** >>>>>>>>>>>

import { Teacher } from "./Teacher";
// const person = new Person("Mubashir!");

const teacher = new Teacher("Mubashir", "B.Sc");

teacher.teach();
