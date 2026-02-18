// ===================== SIDEBAR TOGGLE =====================
const sidebar = document.querySelector('.sidebar');
const hamburger = document.getElementById('hamburger');
const mainContent = document.querySelector('main');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  mainContent.classList.toggle('sidebar-open');
  hamburger.classList.toggle('open');

  if (sidebar.classList.contains('closed')) {
    mainContent.style.marginLeft = '0';
  } else {
    mainContent.style.marginLeft = '260px';
  }
});

// ===================== NOTIFICATION INTERACTIVITY =====================
const notificationCards = document.querySelectorAll('.notification-card');

notificationCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('read');
  });
});

// ===================== POPUP LOGIC (s1 enabled) =====================

// Assigned Tickets Popup
const assignedLink = document.getElementById("assignedTicketsLink");
const assignedModal = document.getElementById("assignedModal");
const assignedBackdrop = document.getElementById("assignedBackdrop");
const assignedClose = document.getElementById("assignedClose");

assignedLink.addEventListener("click", (e) => {
  e.preventDefault();
  assignedModal.classList.add("active");
  assignedBackdrop.classList.add("active");
});
assignedClose.addEventListener("click", () => {
  assignedModal.classList.remove("active");
  assignedBackdrop.classList.remove("active");
});
assignedBackdrop.addEventListener("click", () => {
  assignedModal.classList.remove("active");
  assignedBackdrop.classList.remove("active");
});

// Reports Popup
const reportsLink = document.getElementById("reportsLink");
const reportsModal = document.getElementById("reportsModal");
const reportsBackdrop = document.getElementById("reportsBackdrop");
const reportsClose = document.getElementById("reportsClose");

reportsLink.addEventListener("click", (e) => {
  e.preventDefault();
  reportsModal.classList.add("active");
  reportsBackdrop.classList.add("active");
});
reportsClose.addEventListener("click", () => {
  reportsModal.classList.remove("active");
  reportsBackdrop.classList.remove("active");
});
reportsBackdrop.addEventListener("click", () => {
  reportsModal.classList.remove("active");
  reportsBackdrop.classList.remove("active");
});

// Email Customers Popup
const emailLink = document.getElementById("emailSectionLink");
const emailModal = document.getElementById("emailModal");
const emailBackdrop = document.getElementById("emailBackdrop");
const emailClose = document.getElementById("emailClose");
const emailForm = document.getElementById("emailForm");
const issueDropdown = document.getElementById("issueDropdown");
const emailMessage = document.getElementById("emailMessage");

emailLink.addEventListener("click", (e) => {
  e.preventDefault();
  emailModal.classList.add("active");
  emailBackdrop.classList.add("active");
});
emailClose.addEventListener("click", () => {
  emailModal.classList.remove("active");
  emailBackdrop.classList.remove("active");
});
emailBackdrop.addEventListener("click", () => {
  emailModal.classList.remove("active");
  emailBackdrop.classList.remove("active");
});

// Auto-fill message when selecting common issue
issueDropdown.addEventListener("change", () => {
  if (issueDropdown.value) {
    emailMessage.value = issueDropdown.value;
  }
});

// Handle email form submission
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const to = document.getElementById("emailTo").value;
  alert(`Email sent to ${to}`);
  emailModal.classList.remove("active");
  emailBackdrop.classList.remove("active");
  emailForm.reset();
});

// Elements
const signoutLink = document.getElementById("signoutLink");
const signoutPopup = document.getElementById("signoutPopup");
const confirmSignout = document.getElementById("confirmSignout");
const cancelSignout = document.getElementById("cancelSignout");

// Show popup when clicking sidebar Sign Out
signoutLink.addEventListener("click", (e) => {
  e.preventDefault(); // prevent direct navigation
  signoutPopup.classList.remove("hidden");
});

// Hide popup if "No" clicked
cancelSignout.addEventListener("click", () => {
  signoutPopup.classList.add("hidden");
});

// Redirect if "Yes" clicked
confirmSignout.addEventListener("click", () => {
  window.location.href = "signout.html"; // placeholder redirect
});
