"use strict";

// arguments no longer bound example

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(5,6));

// this no longer bound example

var user = {
  name: "Greg",
  cities: ["Chicago", "Atlanta", "San Diego"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });

    // console.log(this.name);
    // console.log(this.cities);

    // this.cities.forEach((city) => {
    //   console.log(this.name + " has lived in " + city);
    // });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  //numbers - array of numbers to multiply
  numbers: [10, 20, 30],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply - new array where numbes have been multiplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (numNum) {
      return _this2.multiplyBy * numNum;
    });
  }
};

console.log(multiplier.multiply());
