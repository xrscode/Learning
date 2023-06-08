function findTicketPrices(emailString) {
  let regex = /\d+/;
  return regex.test(emailString);
}

console.log(
  findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?")
);

const tree = {
  name: "Oak",
  hasAcorns: true,
  ageInYears: 530,
};

for (const key in tree) {
  // code to be executed
}

for (const key in tree) {
  const value = tree[key];
  console.log(`The tree has a key of ${key} holding the value ${value}`);
  // The tree has a key of name holding the value Oak
  // The tree has a key of hasAcorns holding the value true
  // The tree has a key of ageInYears holding the value 530
}
