let isPasswordVisible = false; // State to track password visibility

function togglePasswordVisibility(passwordInputId, eyeIconId, eyeCutLineId) {
  const passwordInput = document.getElementById(passwordInputId);
  const eyeCutLine = document.getElementById(eyeCutLineId);

  isPasswordVisible = !isPasswordVisible; // Toggle the visibility state

  if (isPasswordVisible) {
    passwordInput.type = 'text'; // Show password
    eyeCutLine.style.display = 'none'; // Hide the cut line
  } else {
    passwordInput.type = 'password'; // Hide password
    eyeCutLine.style.display = 'block'; // Show the cut line
  }
}
