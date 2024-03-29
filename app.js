// code to lead user to page
// when nav bar link is clicked

function loadContent(page) {
  fetch(page)
      .then(response => response.text())
      .then(html => {
          document.getElementById('main-content').innerHTML = html;
      })
      .catch(error => {
          console.error('Failed to load page: ', error);
      });
}


// preload/load for new page/refresh page functions for home/skills/about page

window.addEventListener('load', function() {
  var loaderWrapper1 = document.querySelector('.loader-wrapper1',);
  // Start the fade out
  loaderWrapper1.style.opacity = '0';

  // Wait for the transition to end before hiding the element completely
  setTimeout(function() {
      loaderWrapper1.style.display = 'none';
  }, 2000); // This duration should match the CSS transition duration
});

window.addEventListener('load', function() {
  var loaderWrapper2 = document.querySelector('.loader-wrapper2',);
  // Start the fade out
  loaderWrapper2.style.opacity = '0';

  // Wait for the transition to end before hiding the element completely
  setTimeout(function() {
      loaderWrapper2.style.display = 'none';
  }, 2000); // This duration should match the CSS transition duration
});

window.addEventListener('load', function() {
  var loaderWrapper3 = document.querySelector('.loader-wrapper3',);
  // Start the fade out
  loaderWrapper3.style.opacity = '0';

  // Wait for the transition to end before hiding the element completely
  setTimeout(function() {
      loaderWrapper3.style.display = 'none';
  }, 2000); // This duration should match the CSS transition duration
});


// contact me emailJS

function sendMail(){

}
