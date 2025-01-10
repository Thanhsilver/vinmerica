const scriptURL = 'https://script.google.com/macros/s/AKfycbzRyKENvLEX8YIJv7qQtZFgj8mNu8bzM5DUUtOi3xMCvTvE74xnoloehHG4WFe_B1oP/exec'

const form = document.forms['contact-form']

function successAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Your form has been submitted successfully.',
  });
}

function errorAlert() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong. Please try again.',
  });
}

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      successAlert(); // Show success alert
      setTimeout(() => { window.location.reload(); }, 2000); // Reload after 2 seconds
    })
    .catch(error => {
      errorAlert(); // Show error alert
      console.error('Error:', error.message); // Log error details
    });
})
