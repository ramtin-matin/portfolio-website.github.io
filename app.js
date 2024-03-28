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

