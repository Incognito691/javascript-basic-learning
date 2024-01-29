/**
 * Assignment:-
 *
 * let a = 1;
 *
 * 1) check if a is greater than 100
 * 2) check if a is greater then 100 or a is less than 200
 * 3) check if a is greater then 100 and a is less then 300
 * 4) check if the value of a is undefined
 *
 */

/**
 * Assignment:-
 *
 * let a = "apple"; //  name of any fruits
 *
 * 1) if a is apple, console I love apple
 * 2) if a is banana, console I hate banana
 * 3) if a is orange, console It's okay
 * 4) if a is non of above, console I don't know
 */

// assignment 1

let a = 110;

if (a > 100) {
  console.log("a is greater than 100");
} else {
  console.log("a is not greater than 100");
}

if (a > 100 || a < 200) {
  console.log("a is greater than 100 or less than 200");
} else {
  console.log("a is not greater than 100 and less than 200");
}

if (a > 100 && a < 300) {
  console.log("a is greater than 100 and less than 300");
} else {
  console.log("a is not greater than 100 or not less than 300");
}

/**
 * !a // true
 */

if (a === undefined) {
  console.log("a is undifined");
} else {
  console.log("a has a value");
}

// assignment 2

let VarName = "Kiwi";

switch (VarName) {
  case "apple":
    console.log("I love apple");
    break;

  case "banana":
    console.log("I hate banana");
    break;

  case "orange":
    console.log("It's okay");
    break;

  default:
    console.log("I don't know");
}
for (let i = 1; i < 1000; i++) {
  if (i % 2 !== 0) {
    console.log("Odd", i);
  }
}

let j = 1;
while (j < 1000) {
  if (i % 2 !== 0) {
    console.log("Odd", i);
  }

  j++;
}
