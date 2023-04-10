//Tip Calculator

const billTotal = 430;

let tipTotal = (billTotal >= 50 && billTotal <= 300) ? 1.15 : 1.2;

console.log(`The total cost of your food came to $${billTotal}.  The tip percentage for this value is: ${(billTotal >= 50 && billTotal <= 300) ? '1.15 %' : '1.20%'}.  Therefore your total bill comes to $${(billTotal * tipTotal)}.`);
