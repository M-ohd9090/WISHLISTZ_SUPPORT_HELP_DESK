// Elements
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const forgotPopup = document.getElementById("forgotPopup");
const sendReset = document.getElementById("sendReset");
const cancelReset = document.getElementById("cancelReset");
const signinForm = document.getElementById("signinForm");

// Notification popup elements
const notificationPopup = document.getElementById("notificationPopup");
const notificationTitle = document.getElementById("notificationTitle");
const notificationMessage = document.getElementById("notificationMessage");
const closeNotification = document.getElementById("closeNotification");

// Show custom notification
function showNotification(title, message) {
  notificationTitle.textContent = title;
  notificationMessage.textContent = message;
  notificationPopup.classList.remove("hidden");
}

// Close notification
closeNotification.addEventListener("click", () => {
  notificationPopup.classList.add("hidden");
});

// Show Forgot Password popup
forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  forgotPopup.classList.remove("hidden");
});

// Hide popup when Cancel clicked
cancelReset.addEventListener("click", () => {
  forgotPopup.classList.add("hidden");
});

// Handle Send Reset Link
sendReset.addEventListener("click", () => {
  const email = document.getElementById("resetEmail").value.trim();
  if (email === "" || !email.includes("@")) {
    showNotification("Error", "Please enter a valid email address.");
    return;
  }
  showNotification("Password Reset", `Password reset link sent to ${email}`);
  forgotPopup.classList.add("hidden");
});

// Handle Sign In form submission
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const employeeId = document.getElementById("employeeId").value.trim();
  const password = document.getElementById("password").value.trim();

  if (employeeId === "" || password === "") {
    showNotification("Error", "Please fill in both Employee ID and Password.");
    return;
  }

  // Placeholder: backend authentication logic
  showNotification("Login Successful", `Signed in as Employee ID: ${employeeId}`);
  // Redirect to dashboard page (uncomment when backend ready)
  // window.location.href = "dashboard.html";
});
