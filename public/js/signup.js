const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    // ('#name-signup') for username sign up
    // ('#email-signup') for username sign up
    // ('.signup-form') for event listener
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ User.name, User.email, user.password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(` LOGIN LINE 48 Error!!! ${USer.name} Unable to sign up new user!`);
      }
    }
};


  // line 30 of signup.handlebars
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
