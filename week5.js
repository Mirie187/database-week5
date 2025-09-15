// Part 1: Variable Declarations and Conditionals
let age = 19;
let isStudent = true;

if (age >= 18 && isStudent) {
  console.log("You are an adult student.");
} else if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Part 2: Custom Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to the page.`;
}

function squareNumber(num) {
  return num * num;
}

// Example usage:
console.log(greetUser("Miriam"));
console.log("Square of 5 is:", squareNumber(5));

// Part 3: Loop Examples
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// Part 4: DOM Interactions
// 1. Change text content when button is clicked
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button was clicked! 🎉";
});

// 2. Display name entered in input field
document.getElementById("showNameBtn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  if (name) {
    document.getElementById("message").textContent = greetUser(name);
  } else {
    document.getElementById("message").textContent = "Please enter a name!";
  }
});

let fruits = ["Mango", "Apple", "Banana"];
let listContainer = document.getElementById("listContainer");

fruits.forEach(function(fruit) {
  let li = document.createElement("li");
  li.textContent = fruit;
  listContainer.appendChild(li);
});
