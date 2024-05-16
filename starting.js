/*Instructions
In this exercise you will be writing code to help a freelancer communicate with their clients about the prices of certain projects. You will write a few utility functions to quickly calculate the costs for the clients.

Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.


function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {}*/
//calculate how many full months
//calculate total cost montly
//calculate discount
//calculate remaining days
//calculate cost of the remaining days
//calculate the sum of the total

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let billableDaysMonth = 22;
  let costMonthly = ratePerHour * 8 * billableDaysMonth;

  let totalFullMonths = Math.floor(numDays / billableDaysMonth);
  let remainingDays = numDays % billableDaysMonth;

  let discountForFullMonths = costMonthly * totalFullMonths * (1 - discount);
  let costRemainingDays = remainingDays * ratePerHour * 8;
  return Math.ceil(costRemainingDays + discountForFullMonths);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));

/*Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.

Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.*/
function frontDoorPassword(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
console.log(frontDoorPassword("Stands"));

/*GET THE LAST LETTER OF A SENTENCE
To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you.

The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word:*/

export function backDoorResponse(line) {
  let lastChar = line.trim().length;
  return line.trim().charAt(lastChar - 1);
}
console.log(backDoorResponse("Stands so high      "));
console.log(backDoorResponse("Stands so low"));

/*To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end.

Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.*/

export function backDoorPassword(word) {
  return (
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ", please"
  );
}
console.log(backDoorPassword("horse"));
console.log(backDoorPassword("summer"));

/*Now that you made your decision you want to make sure you get a fair price at the dealership. Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.

Implement the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and else (there are other ways if you want to practice). It takes the original price and the age of the vehicle as arguments and returns the estimated price in the dealership.*/

/*export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice - (originalPrice * 0.2);
  } else if( age === 3 || age < 10 ) {
    return originalPrice - (originalPrice * 0.3);
  } else {
    return originalPrice - (originalPrice * 0.5);
  }
}*/

export function calculateResellPrice(originalPrice, age) {
  return age < 3
    ? originalPrice * 0.8
    : age === 3 || age < 10
    ? originalPrice * 0.7
    : originalPrice * 0.5;
}

console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(1000, 18));

/*DTOTAL NUMBER OF BIRDS
Let us start analyzing the data by getting a high-level view. Find out how many birds 
you counted in total since you started your logs.
Implement a function totalBirdCount that accepts an array that contains 
the bird count per day. It should return the total number of birds that you counted.*/

export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));
console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 1, 3, 1]));

/*BIRDS PER WEEK
Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.
Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. 
It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.*/

export function birdsInWeek(birdsPerDay, week) {
  const daysPerWeek = 7;
  let weekStarts = (week - 1) * daysPerWeek;
  let weekEnds = weekStarts + daysPerWeek - 1;
  let count = 0;

  for (let i = weekStarts; i <= weekEnds; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

console.log(birdsInWeek([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0], 1));

/*FIX COUNTING MISTAKE
You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array.*/

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i+=2) {
     birdsPerDay[i]++
  }
  return birdsPerDay;
}
 console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]))
 console.log(fixBirdCountLog([4, 2]))
