const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${Math.abs(movement)}.`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

const forEach = movements.forEach((x) => {
  return x > 0
    ? console.log(`You deposited ${Math.abs(x)}.`)
    : console.log(`You withdrew ${Math.abs(x)}`);
});
