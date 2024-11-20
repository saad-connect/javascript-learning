let x = 3;
let y = 6;
var suM = x + y;
console.log(suM);
console.log(typeof suM);

var oldMemories = "saad";
console.log(oldMemories);
console.log(typeof oldMemories);

var wrrIte = "";
if (wrrIte) {
  console.log('true');
} else {
  console.log("false");
}

var result = "hello" / 2;
console.log(result);

var saadKhan = " 18";
console.log(parseInt("123"));

result = 0.3 + 0.4;
console.log(result.toFixed(4));

result = 123 / "saad";
console.log(result);

var str1 = 123;
var str2 = 321;
var str3 = str1 + str2;
console.log(str3);

stringnum = "5" + 3;
console.log(stringnum);

age = 19;
licence = "false";
console.log(age <= 18 && licence);

age = 19;
licence = "false";
console.log(age <= 18 || licence);

var day = "Friday";
switch (day) {
  case "Monday":
    console.log("Go to school");
    break;
  case "Tuesday":
    console.log("Do homework");
    break;
  case "Wednesday":
    console.log("Do some extra work");
    break;
  case "Thursday":
    console.log("Play cricket");
    break;
  case "Friday":
    console.log("Go for a walk");
    break;
  case "Saturday":
    console.log("Lift 40kg weight");
    break;
  case "Sunday":
    console.log("Go for a picnic");
    break;
}

var shaPe = "circle";
var a = 4;
var b = 5;
var result;

switch (shaPe) {
  case "square":
    result = a * a;
    console.log(result);
    break;
  case "Rectangle":
    result = a * b;
    console.log(result);
    break;
  case "circle":
    var r = 3;
    result = 3.14 * (r * r);
    console.log(result);
    break;
  default:
    result = "Invalid shape";
}

var num = 1;
while (num <= 15) {
  console.log(num);
  num++;
}

for (let i = 1; i <= 15; i++) {
  console.log(i);
}

let userInput;
let positiveNumber;
do {
  userInput = prompt("Enter a Positive number");
  positiveNumber = parseFloat(userInput);
} while (isNaN(positiveNumber) || positiveNumber < 0);
console.log("You entered a valid Number", positiveNumber);

var i = 1;
while (i <= 10) {
  console.log('5 *' + i + '=' + 5 * i);
  i++;
}

function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
printTable(5);

function countdown(seconds) {
  let timer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timer);
      console.log("Time's up!");
    } else {
      console.log(seconds);
      seconds--;
    }
  }, 1000);
}
countdown(5);

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}
console.log(findLargestNumber([3, 5, 7, 2, 8]));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("JavaScript"));

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

function isPalindrome(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return word === reversed ? "Palindrome" : "Not a Palindrome";
}
console.log(isPalindrome("racecar"));

function printNumbersUpTo(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}
printNumbersUpTo(10);

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(100));

function multiplicationTableForRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
multiplicationTableForRange(2, 5);

function arrayElementsSquared(arr) {
  let squared = [];
  for (let i = 0; i < arr.length; i++) {
    squared.push(arr[i] ** 2);
  }
  return squared;
}
console.log(arrayElementsSquared([1, 2, 3, 4, 5]));
 