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
return age < 3 ? originalPrice * 0.8 : age === 3 || age < 10 ? originalPrice * 0.7 : originalPrice * 0.5
}

console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(1000, 18));
