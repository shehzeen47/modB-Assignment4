const array = [
  42,
  true,
  "hello, world!",
  { name: "john", age: 25, isStudent: false },
  false,
  3.14,
  "javascript is fun",
];

let b = array.map((x) => {
  return x;
});
console.log(b);

let c = array.filter((a) => {
  return typeof a === "number";
});
console.log(c);
console.log(typeof c);

let sum = array.reduce((accumulator, currentValue) => {
  if (typeof currentValue === "number") {
    accumulator += currentValue;
  }
  return accumulator;
}, 0);
console.log(`The sum of array: ${sum}`);

let d = array.find((acc) => {
  return typeof acc === "boolean";
});
console.log(d);

let e = array.findIndex((acc) => {
  return typeof acc === "object";
});
console.log(e);

let f = array.some((acc) => {
  return typeof acc === "number";
});
console.log(f);

let g = array.every((acc) => {
  return typeof acc === "string";
});
console.log(g);