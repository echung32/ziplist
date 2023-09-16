// https://courses.ics.hawaii.edu/ics314f23/morea/coding-standards/experience-five-problems-2.html

const xa = ['a', 'b', 'c'];
const yb = [1, 2, 3];

function zipList(x, y) {
  const arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i]);
    arr.push(y[i]);
  }
  return arr;
}

function zipListTheSimpleWay(x, y) {
  return _.flatten(_.zip(x, y));
}

console.log(zipList(xa, yb));
console.log(zipListTheSimpleWay(xa, yb));

// Time: 9:13
