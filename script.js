const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// findIndex()
//Returns 3
console.log(movements.findIndex((x) => x > 1000));
//Returns -1
console.log(movements.findIndex((x) => x > 1000));

// some()
//Returns true.  At least one element is greater than 1000.
console.log(movements.some((x) => x > 1000));
//Returns false.  No elements greater than 10,000.
console.log(movements.some((x) => x > 10000));

// every()
//True: All elements are greater than -651.
console.log(movements.every((x) => x > -651));
//False: Some elements are smaller than 5.
console.log(movements.every((x) => x > 5));

//flat()
const movements2 = [[1, 2, 3], 4, 5, [6, 7], 8, 9];
//Returns: 1, 2, 3, 4, 5, 6, 7, 8, 9 to the console.
console.log(movements2.flat());

const movements3 = [[1, 2, 3], [4, [5]], [6, 7], 8, 9];
//Returns: 1, 2, 3, 4, Array(1), 6, 7, 8, 9 to the console.
console.log(movements3.flat(1));
//Returns: 1, 2, 3, 4, 5, 6, 7, 8, 9 to the console.
console.log(movements3.flat(2));

//flatMap();
const movements4 = [[1, 2, 3], [4, [5]], [6, 7], 8, 9];
//Returns: ['1, 2, 31', '4, 51', '6, 71', 9 10]
console.log(movements4.flatMap((x) => x + 1));
//Returns 2,3,4,5,6,7,8,9,10...
console.log(movements4.flat(2).flatMap((x) => x + 1));

//sort();
const names = ["Dylan", "Harriet", "Amber", "Quinn", "Bean"];
const numbers = [1, 3, 6, 2, 3, 1, 57, 8];
//Returns ['Amber', 'Bean', 'Dylan'...]
console.log(names.sort());
//Returns same string.
console.log(numbers.sort());
//Sorts numbers from smallest to largest;
console.log(
  numbers.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
  })
);
