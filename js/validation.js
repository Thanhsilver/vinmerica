document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const firstName = document.getElementById('inputFName').value.trim();
    const lastName = document.getElementById('inputLName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const phone = document.getElementById('inputCel').value.trim();
  
    // Simple validation
    if (firstName === '' || firstName.length < 2) {
      alert('First Name must be at least 2 characters long.');
      return;
    }
  
    if (lastName === '' || lastName.length < 2) {
      alert('Last Name must be at least 2 characters long.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
  
    // Hàm kiểm tra trạng thái form
    function checkFormValidity() {
      submitButton.disabled = !form.checkValidity(); // Vô hiệu hóa nếu form không hợp lệ
    }
  
    // Lắng nghe sự kiện 'input' trên tất cả các trường
    form.addEventListener('input', checkFormValidity);
  
    // Kiểm tra ngay khi tải trang (nếu cần)
    checkFormValidity();
  });
  
  