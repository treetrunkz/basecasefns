// a small set of examples using arrow functions and the fundamental
// map, filter, and reduce/fold.

// odds :: [Number] -> [Number]
// > odds([1,2,3,4,5,6])
// [1,3,5]
function odds(xs) {
  return xs.filter(x => x % 2 === 1);
}

// evens :: [Number] -> [Number]
// > evens([1,2,3,4,5,6])
// [2,4,6]
function evens(xs) {
  return xs.filter(x => x % 2 === 0);
}

// sum :: [Number] -> Number
// > sum([1,2,3,4])
// 10
function sum(xs) {
  return xs.reduce((x,acc) => x + acc, 0);
}

// product :: [Number] -> Number
// > product([1,2,3,4])
// 24
function product(xs) {
  return xs.reduce((x,acc) => x * acc, 1);
}

// and :: [Bool] -> Bool
// > and([1 > 2, 2 > 3, 5 > 4])
// false
function and(xs) {
  return xs.reduce((x,acc) => x && acc, true);
}

// or :: [Bool] -> Bool
// > or([1 > 2, 2 > 3, 5 > 4])
// true
function or(xs) {
  return xs.reduce((x,acc) => x || acc, false);
}

// squareAll :: [Number] -> [Number]
// > squareAll([1,2,3,4])
// [1,4,9,16]
function squareAll(xs) {
  return xs.map(x => x * x);
}
