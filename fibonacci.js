// 0 1 1 2 3 5 8 13

var i = 0;
var cap = 1000000000000000000;

var section = [0, 1];
section.push(section[0] + section[1]);
for (i = 0; i < 3; i++) {
  console.log(section[i]);
  
}

// console.log("\n\n");

function fib() {
  for (i = 0; i < 2; i++) {
    section[i] = section[i + 1];
  }
  section[2] = section[0] + section[1];
  console.log(section[2]);

  if (section[2] < cap) {
    fib();
  }
}

fib();