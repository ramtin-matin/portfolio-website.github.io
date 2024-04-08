



// preload/load for new page/refresh page functions for home/skills/about page

window.addEventListener('load', function() {
  var loaders = document.querySelectorAll('.loader-wrapper1, .loader-wrapper2, .loader-wrapper3');
  loaders.forEach(function(loader) {
      // Start the fade out
      loader.style.opacity = '0';
  
      // Wait for the transition to end before hiding the element completely
      setTimeout(function() {
          loader.style.display = 'none';
      }, 2000); // This duration should match the CSS transition duration
  });
});



// contact me emailJS

function sendMail() {
  // Get input values
  var name = document.querySelector(".name-input").value.trim();
  var email = document.querySelector(".email-input").value.trim();
  var subject = document.querySelector(".subject-input").value.trim();
  var message = document.querySelector(".message-input").value.trim();

  // Check if any fields are empty
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields before sending.");
    return; // Stop the function from proceeding further
  }

  var params = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  }

  const serviceID = "ramtin.email";
  const templateID = "template1";

  emailjs.send(serviceID, templateID, params)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      // Clearing the input fields after successful submission
      document.querySelector(".name-input").value = "";
      document.querySelector(".email-input").value = "";
      document.querySelector(".subject-input").value = "";
      document.querySelector(".message-input").value = "";
      alert("Email sent successfully!");
    }, err => {
      console.log('FAILED...', err);
      alert("Failed to send the email. Please try again later.");
    });
}


// projects slideshow code
var slideIndex = 1;
showSlide(slideIndex);

// Function to change the slide
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Function to control which slide is shown
function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



