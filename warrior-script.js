// Select the button with the class "menu"
const menuButton = document.querySelector('.menu');

// Add a click event listener to the button
menuButton.addEventListener('click', () => {
  // Create a new div element
  const mobileDiv = document.createElement('div');

  // Set the class attribute of the new div element
  mobileDiv.setAttribute('class', 'mobile');

  // Set the innerHTML of the new div element
  mobileDiv.innerHTML = `
    <div class="cross-button">&times;</div>
    <br><br>
    <a href="https://www.example.com" class="button">Click me</a>
    <a href="https://www.example.com" class="button">Click me</a>
    <a href="https://www.example.com" class="button">Click me</a>
    <a href="https://www.example.com" class="button">Click me</a>
    <a href="https://www.example.com" class="button">Click me</a>
  `;

  // Insert the new div element at the beginning of the body
  document.body.insertBefore(mobileDiv, document.body.firstChild);

  // Select the cross-button element
  const crossButton = mobileDiv.querySelector('.cross-button');

  // Add a click event listener to the cross-button element
  crossButton.addEventListener('click', () => {
    // Remove the mobile div from the DOM
    document.body.removeChild(mobileDiv);
  });
});
