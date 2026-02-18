// ===================== CUSTOMER DATA =====================
const customers = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "Pune, Maharashtra",
    type: "Business",
    age: 29,
    gender: "Male",
    duration: "2 Years"
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "9123456780",
    address: "Mumbai, Maharashtra",
    type: "General",
    age: 26,
    gender: "Female",
    duration: "1 Year"
  }
];

const searchInput = document.getElementById("customerSearchInput");
const resultsDiv = document.getElementById("customerResults");

// ===================== DISPLAY CUSTOMERS =====================
function displayCustomers(list) {
  resultsDiv.innerHTML = "";
  list.forEach(c => {
    const card = document.createElement("div");
    card.className = "customer-card";
    card.innerHTML = `
      <h3>${c.name}</h3>
      <p><b>Email:</b> ${c.email}</p>
      <p><b>Phone:</b> ${c.phone}</p>
      <p><b>Address:</b> ${c.address}</p>
      <p><b>Customer Type:</b> ${c.type}</p>
      <p><b>Gender:</b> ${c.gender}</p>
      <p><b>Age:</b> ${c.age}</p>
      <p><b>With Wishlistz:</b> ${c.duration}</p>
    `;
    resultsDiv.appendChild(card);
  });
}

// Initial render
displayCustomers(customers);

// ===================== SEARCH FILTER =====================
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(value) ||
    c.email.toLowerCase().includes(value) ||
    c.phone.includes(value)
  );
  displayCustomers(filtered);
});

// ===================== HAMBURGER TOGGLE =====================
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector("main");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  hamburger.classList.toggle("open");
  mainContent.classList.toggle("sidebar-open");
});

// ===================== POPUP LOGIC (same as calendar) =====================

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
