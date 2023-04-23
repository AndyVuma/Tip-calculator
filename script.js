
// Get the elements from the HTML document
let tipForm = document.getElementById("tip-form");
let billAmount = document.getElementById("bill-amount");
let tipPercent = document.getElementById("tip-percent");
let tipMessage = document.getElementById("tip-message");

// Define a function to calculate the tip
function calculateTip(billAmount, tipPercent) {
  // Convert the tip percent to a decimal
  let tipDecimal = tipPercent / 100;
  // Multiply the bill amount by the tip decimal
  let tipAmount = billAmount * tipDecimal;
  // Return the tip amount
  return tipAmount;
}

// Define a function to display the tip
function displayTip(billAmount, tipPercent) {
  // Call the calculateTip function and store the result
  let tipAmount = calculateTip(billAmount, tipPercent);
  // Round the tip amount to two decimal places
  let roundedTip = tipAmount.toFixed(2);
  // Display the tip amount in a message
  tipMessage.textContent = `The tip for a $${billAmount} bill at ${tipPercent}% is $${roundedTip}.`;
}

// Add an event listener to the form submit event
tipForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the user input values
  let billValue = billAmount.value;
  let tipValue = tipPercent.value;
  // Validate the input values
  if (billValue === "" || tipValue === "" || billValue <= 0 || tipValue <= 0) {
    // Display an error message if the input values are invalid
    alert("Please enter positive values for both fields.");
  } else {
    // Call the displayTip function with the input values
    displayTip(billValue, tipValue);
  }
});
