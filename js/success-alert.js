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