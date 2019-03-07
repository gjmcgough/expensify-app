// OBJECT DESTRUCTURING

// const person = {
//   name: "Greg",
//   age: 30,
//   location: {
//     city: 'San Diego',
//     temp: 65
//   }
// };
//
// //renaming 'name' as 'firstName' and setting default value for firstName
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);
// // above is the same as below
// // const name = person.name;
// // const age = person.age;
//
// //below 'temp' is being renamed as 'temperature'
// const {city, temp: temperature} = person.location;
// if (city && temperature){
//   console.log(`Its ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego',
//   author: 'Ryan Holliday',
//   publisher: {
//     name:'penguin'
//   }
// }
//
// const {name: publisherName = 'self-published'} = book.publisher;
//
// console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = [
//   '1299 South Juniper S',
//   'Philly',
//   'Penn',
//   '19147'
// ];
// // below skips destructuring first and last indexes
// const [, city, state = "Georgia"] = address;
//
// console.log(`You are in ${city} ${state}.`)


const item = [
  'coffee (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
]

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
