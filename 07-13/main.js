console.log("its friday!");

// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).



// The function, when invoked, will print out the following 
// in your console (for example): `The car is moving forward, at 25 mph'

// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!


function go(direction, speed) {
    
    if (speed > 75) {
        console.log(`The car is moving ${direction}, at ${speed} mph.`+ "SLOWDOWN")
    }
    else {
        console.log(`The car is moving ${direction}, at ${speed} mph.`);
    }
}

go("forward", "25");
go("forward", "100");


let element=document.getElementById("sweetspot");
element.innerHTML+="<p>woop</p>";



// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.
const bestYears = [];
const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]
//solution:
// for (let i = 0; i < birthRates.length; i++) {
//     const currentYear = birthRates[i];
//     if (currentYear.birthRate >= 15){ 
//         bestYears.push(currentYear);

//     }
// }

// console.log(bestYears);


//alternate solution:
// birthRates.forEach(function (currentYear){

//     if (currentYear.birthRate >= 15){ 
//                 bestYears.push(currentYear);
//             }
// });

// console.log(bestYears);


//alternate solution:
for (currentYear of birthRates) {
    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear.year)
    }
}
console.log(bestYears);