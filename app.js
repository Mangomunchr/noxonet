document.querySelector('a[href="#"]').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = '/signup.html';
});