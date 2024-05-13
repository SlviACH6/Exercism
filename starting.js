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

let billableDaysMonth = 22
let costMonthly = ratePerHour * 8 * billableDaysMonth 

let totalFullMonths = Math.floor(numDays / billableDaysMonth)
let remainingDays = numDays % billableDaysMonth

let discountForFullMonths = costMonthly * totalFullMonths * ( 1 - discount)
let costRemainingDays = remainingDays * ratePerHour * 8
return Math.ceil(costRemainingDays + discountForFullMonths)

}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
