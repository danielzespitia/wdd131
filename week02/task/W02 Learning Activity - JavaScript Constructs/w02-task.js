const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("--- Task 1: 'for' loop ---");
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

console.log("--- Task 2: 'while' loop ---");
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

console.log("--- Task 3: 'forEach' loop ---");
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

console.log("--- Task 4: 'for...in' loop ---");
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

console.log("--- Task 5: Future Days ---");

const dayNames = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

const todayIndex = new Date().getDay();

console.log(`Today is: ${dayNames[todayIndex]}`);
console.log(`The next ${DAYS} days are:`);

for (let i = 1; i <= DAYS; i++) {
  let nextDayIndex = (todayIndex + i) % 7;
  console.log(dayNames[nextDayIndex]);
}