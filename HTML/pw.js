// Password Validation on Submit
function setPassword(event) {
  event.preventDefault();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match. Please try again.";
    message.style.color = 'red';
    message.style.display = 'block';
    return;
  }
  
  // Save password and proceed
  const users = JSON.parse(localStorage.getItem('users'));
  if (users) {
    users[users.length - 1].password = password;
    localStorage.setItem('users', JSON.stringify(users));
  }

  

  // Fade out and redirect
  document.body.classList.add('fade-out');
  setTimeout(() => window.location.href = 'signinPage.html', 500);
}

// Event Listener
document.getElementById('password-form').addEventListener('submit', setPassword);
