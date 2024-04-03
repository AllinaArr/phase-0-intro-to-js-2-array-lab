// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(a) {
  cats.push(a);
}

function destructivelyPrependCat(a) {
  cats.unshift(a);
}

function destructivelyRemoveLastCat(a) {
  cats.pop(a);
}

function destructivelyRemoveFirstCat(a) {
  cats.shift(a);
}

function appendCat(a) {
  return [...cats, a];
}

function prependCat(a) {
  return [a, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
