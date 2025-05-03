// Show either login or signup form
function showForm(type) {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
  
    if (type === 'login') {
      document.getElementById('loginForm').classList.remove('hidden');
    } else {
      document.getElementById('signupForm').classList.remove('hidden');
    }
  }
  
  // Validate login form
  function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return false;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }
  
    alert('Login successful!');
    return false; // Prevent actual form submission
  }
  
  // Validate signup form
  function validateSignup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
  
    if (!name) {
      alert('Please enter your name.');
      return false;
    }
  
    if (!validateEmail(email)) {
      alert('Invalid email format.');
      return false;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return false;
    }
  
    if (password !== confirm) {
      alert('Passwords do not match.');
      return false;
    }
  
    alert('Signup successful!');
    return false;
  }
  
  // Basic email format checker
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  