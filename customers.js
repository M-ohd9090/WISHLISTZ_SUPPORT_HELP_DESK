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

// ===================== ASSIGNED TICKETS POPUP =====================
const assignedLink = document.getElementById("assignedLink");
const assignedBackdrop = document.getElementById("assignedBackdrop");
const closeAssigned = document.getElementById("closeAssigned");

if (assignedLink && assignedBackdrop && closeAssigned) {
  assignedLink.addEventListener("click", (e) => {
    e.preventDefault();
    assignedBackdrop.style.display = "flex";
  });
  closeAssigned.addEventListener("click", () => {
    assignedBackdrop.style.display = "none";
  });
  assignedBackdrop.addEventListener("click", (e) => {
    if (e.target === assignedBackdrop) {
      assignedBackdrop.style.display = "none";
    }
  });
}

// Resolve button logic inside table
const assignedTable = document.querySelector(".assigned-table");
if (assignedTable) {
  assignedTable.addEventListener("click", (e) => {
    if (e.target.classList.contains("resolve-btn")) {
      const row = e.target.closest("tr");
      const statusDropdown = row.querySelector(".status-dropdown");
      if (statusDropdown) {
        statusDropdown.value = "Resolved";
        statusDropdown.style.color = "#2ecc71";
      }
      e.target.disabled = true;
      e.target.textContent = "Done";
    }
  });
}

// ===================== REPORTS POPUP =====================
const reportsLink = document.getElementById("reportsLink");
const reportsModal = document.getElementById("reportsModal");
const reportsBackdrop = document.getElementById("reportsBackdrop");
const reportsClose = document.getElementById("reportsClose");

if (reportsLink && reportsModal && reportsBackdrop && reportsClose) {
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
}

// ===================== EMAIL CUSTOMERS POPUP =====================
const emailLink = document.getElementById("emailSectionLink");
const emailModal = document.getElementById("emailModal");
const emailBackdrop = document.getElementById("emailBackdrop");
const emailClose = document.getElementById("emailClose");
const emailForm = document.getElementById("emailForm");
const issueDropdown = document.getElementById("issueDropdown");
const emailMessage = document.getElementById("emailMessage");

if (emailLink && emailModal && emailBackdrop && emailClose) {
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
}

// Auto-fill message when selecting common issue
if (issueDropdown && emailMessage) {
  issueDropdown.addEventListener("change", () => {
    if (issueDropdown.value) {
      emailMessage.value = issueDropdown.value;
    }
  });
}

// Handle email form submission
if (emailForm) {
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const to = document.getElementById("emailTo").value;
    alert(`Email sent to ${to}`);
    emailModal.classList.remove("active");
    emailBackdrop.classList.remove("active");
    emailForm.reset();
  });
}

// ===================== SIGN OUT POPUP =====================
const signoutLink = document.getElementById("signoutLink");
const signoutPopup = document.getElementById("signoutPopup");
const confirmSignout = document.getElementById("confirmSignout");
const cancelSignout = document.getElementById("cancelSignout");

if (signoutLink && signoutPopup && confirmSignout && cancelSignout) {
  signoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    signoutPopup.classList.remove("hidden");
  });
  cancelSignout.addEventListener("click", () => {
    signoutPopup.classList.add("hidden");
  });
  confirmSignout.addEventListener("click", () => {
    window.location.href = "login.html"; // placeholder redirect
  });
}
