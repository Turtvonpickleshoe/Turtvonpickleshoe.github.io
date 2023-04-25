// Select the button with the class "menu"
const menuButton = document.querySelector('.menu');

// Add a click event listener to the button
menuButton.addEventListener('click', () => {
  // Create a new div element
  const mobileDiv = document.createElement('div');

  // Set the class attribute of the new div element
  mobileDiv.classList.add('mobile', 'mobile-clip');

  // Set the innerHTML of the new div element
  mobileDiv.innerHTML = `
    <div class="cross-button">&times;</div>
    <br><br>
    <a href="programs.html" class="button">Programs</a>
    <a href="calendar.html" class="button">Schedule</a>
    <a href="contact.html" class="button">Get Involved</a>
    <a href="about-us.html" class="button">About Us</a>
    <a href="donate.html" class="button">Donate</a>
  `;

  // Insert the new div element at the beginning of the body
  document.body.insertBefore(mobileDiv, document.body.firstChild);

  // Select the cross-button element
  const crossButton = mobileDiv.querySelector('.cross-button');

  // Add a click event listener to the cross-button element
  crossButton.addEventListener('click', () => {
    // Remove the mobile div from the DOM
    event.stopPropagation(); // prevent event from bubbling up to parent
    mobileDiv.classList.add('mobile-removed');
    setTimeout(function() { 
        document.body.removeChild(mobileDiv);
        }, 740);
  });
});
