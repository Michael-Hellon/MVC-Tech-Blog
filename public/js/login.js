const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // ('#email-login') for username login
  // ('.login-form') for event listener
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser 
      document.location.replace('/dashboard');
    } else {
      alert('UserName or email not found');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  // ('#name-signup') for username sign up
  // ('.signup-form') for event listener
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// line 7 of login.handlebars
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  // line 25 of login.handlebars
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
