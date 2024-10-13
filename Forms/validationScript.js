// Add an event listener for when the page loads:
document.addEventListener('DOMContentLoaded', function() {
  // Obtain elements from webpage
  const form = document.getElementById('alphanumericForm');
  const input = document.getElementById('inputValue');
  const errorMessage = document.getElementById('errorMessage');
  const noErrorMessage = document.getElementById('noErrorMessage');

  // Function to validate the input
  function validateInput(event) {
    event.preventDefault();

    // Obtain input value
    const inputValue = input.value;

    // State alphanumeric values allowed
    const alphanumericValues = /^[a-z0-9]+$/i;

    // Set messages to blank strings
    errorMessage.textContent = '';
    noErrorMessage.textContent = '';

    // Check if input is NOT alphanumeric
    if (!alphanumericValues.test(inputValue)) {
      // Display message in red
      errorMessage.textContent = 'Error: All characters must be alphanumeric.';
      errorMessage.style.color = 'red';

      // Don't allow form submission:
      event.preventDefault();
    } else {
      // Display message in green
      noErrorMessage.textContent = 'Form submitted!';
      noErrorMessage.style.color = 'green';

      // Don't allow form submission:
      event.preventDefault();
    }
  }

  // Call validateInput function when 'Submit' button is submitted.
  form.addEventListener('submit', validateInput);

});