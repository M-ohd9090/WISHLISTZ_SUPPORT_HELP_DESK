// Elements
const registerForm = document.getElementById("registerForm");
const registerSuccessPopup = document.getElementById("registerSuccessPopup");
const goToLogin = document.getElementById("goToLogin");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value.trim();
  const id = document.getElementById("id").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const shift = document.getElementById("shift").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();

  // Basic validation
  if (!name || !email || !password || !role || !id || !phone || !shift || !address || !city || !state) {
    alert("Please fill in all required fields.");
    return;
  }

  // Email validation
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password validation (minimum 6 characters)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Phone validation (basic numeric check)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Success → show popup
  registerSuccessPopup.classList.remove("hidden");
});

// Redirect to login page when button clicked
goToLogin.addEventListener("click", () => {
  window.location.href = "login.html";
});
