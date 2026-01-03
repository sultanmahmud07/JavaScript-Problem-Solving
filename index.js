/***************************************
  1. Array Filtering and Mapping
****************************************/
const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karima", age: 22, gender: "female" },
  { name: "Hasan", age: 30, gender: "male" }
];

const maleNames = people
  .filter(person => person.gender !== "female")
  .map(person => person.name);

console.log("1. Male Names:", maleNames);


/***************************************
  2. Object Manipulation
****************************************/
const books = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 }
];

const bookTitles = books.map(book => book.title);
console.log("2. Book Titles:", bookTitles);


/***************************************
  3. Function Composition
****************************************/
const square = n => n * n;
const double = n => n * 2;
const addFive = n => n + 5;

const composedFunction = n => addFive(double(square(n)));
console.log("3. Function Composition Result:", composedFunction(3));


/***************************************
  4. Sorting Objects
****************************************/
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2021 }
];

cars.sort((a, b) => a.year - b.year);
console.log("4. Sorted Cars by Year:", cars);


/***************************************
  5. Find and Modify
****************************************/
const persons = [
  { name: "Shimul", age: 23 },
  { name: "Hasan", age: 28 }
];

function updateAge(arr, name, newAge) {
  const person = arr.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return arr;
}

console.log("5. Updated Persons:", updateAge(persons, "Shimul", 24));


/***************************************
  6. Array Reduction
****************************************/
const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEven = numbers.reduce((sum, num) => {
  return num % 2 === 0 ? sum + num : sum;
}, 0);

console.log("6. Sum of Even Numbers:", sumOfEven);


/***************************************
  7. Leap Year Checker
****************************************/
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("7. Is 2024 Leap Year?", isLeapYear(2024));


/***************************************
  8. Unique Values
****************************************/
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log("8. Unique Numbers:", uniqueNumbers);


/***************************************
  9. Advanced Sorting
****************************************/
const students = [
  { name: "A", grades: [80, 90, 85] },
  { name: "B", grades: [70, 75, 72] },
  { name: "C", grades: [95, 92, 96] }
];

students.sort((a, b) => {
  const avgA = a.grades.reduce((s, g) => s + g, 0) / a.grades.length;
  const avgB = b.grades.reduce((s, g) => s + g, 0) / b.grades.length;
  return avgB - avgA;
});

console.log("9. Students Sorted by Average Grade:", students);


/***************************************
  10. Functional Programming - Reduce
****************************************/
const products = [
  { quantity: 2, price: 500 },
  { quantity: 1, price: 1200 },
  { quantity: 4, price: 250 }
];

const totalValue = products.reduce((total, item) => {
  return total + item.quantity * item.price;
}, 0);

console.log("10. Total Product Value:", totalValue);
