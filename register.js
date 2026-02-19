// Elements
const registerForm = document.getElementById("registerForm");
const registerSuccessPopup = document.getElementById("registerSuccessPopup");
const goToLogin = document.getElementById("goToLogin");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const workEmail = document.getElementById("workEmail").value.trim();
  const employeeId = document.getElementById("employeeId").value.trim();

  // Basic validation
  if (!name || !birthdate || !gender || !address || !city || !state || !workEmail || !employeeId) {
    alert("Please fill in all required fields.");
    return;
  }

  // Email validation
  if (!workEmail.includes("@")) {
    alert("Please enter a valid Wishlistz email.");
    return;
  }

  // Success → show popup
  registerSuccessPopup.classList.remove("hidden");
});

// Redirect to login page when button clicked
goToLogin.addEventListener("click", () => {
  window.location.href = "login.html";
});
