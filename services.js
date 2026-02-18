// ===================== SERVICES INTERACTIVITY =====================

// Grab modal elements
const popupModal = document.getElementById("popupModal");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupClose = document.getElementById("popupClose");

// Function to open popup with dynamic content
function openPopup(title, message) {
  popupTitle.textContent = title;
  popupMessage.innerHTML = message; // allow HTML (forms, dropdowns, FAQs, etc.)
  popupModal.classList.add("active");
  document.body.style.overflow = "hidden"; // prevent background scroll
}

// Function to close popup
function closePopup() {
  popupModal.classList.remove("active");
  document.body.style.overflow = ""; // restore scroll
}

// Close popup when clicking the close button
if (popupClose) {
  popupClose.addEventListener("click", closePopup);
}

// Close popup when clicking outside the content
popupModal.addEventListener("click", (e) => {
  if (e.target === popupModal) {
    closePopup();
  }
});

// ===================== SECTION INTERACTIONS =====================
document.querySelectorAll(".services-section ul li").forEach(item => {
  item.addEventListener("click", () => {
    const sectionTitle = item.closest(".services-section").querySelector("h2").textContent;
    const message = item.getAttribute("data-message") || `You selected "${item.textContent}" under ${sectionTitle}.`;
    openPopup(sectionTitle, message);
  });
});

// ===================== OPTIONAL: Expand/Collapse Sections =====================
document.querySelectorAll(".services-section h2").forEach(header => {
  header.addEventListener("dblclick", () => {
    const list = header.nextElementSibling;
    list.style.display = (list.style.display === "none") ? "block" : "none";
  });
});

// ===================== FORM & BUTTON ACTIONS =====================
popupMessage.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const action = e.target.textContent.trim();

    switch(action) {
      case "Create Ticket":
        alert("Ticket created successfully with provided details!");
        break;
      case "Assign Ticket":
        alert("Ticket assigned to selected agent.");
        break;
      case "Close Ticket":
        alert("Ticket closed with resolution note.");
        break;
      case "Watch: Resolving Payment Issues":
        alert("Launching tutorial: Resolving Payment Issues...");
        break;
      case "Watch: Handling Returns":
        alert("Launching tutorial: Handling Returns...");
        break;
      case "Watch: Escalation Workflow":
        alert("Launching tutorial: Escalation Workflow...");
        break;
      case "Open: Return Process Guide":
        alert("Opening Return Process Guide...");
        break;
      case "Open: Payment Troubleshooting Guide":
        alert("Opening Payment Troubleshooting Guide...");
        break;
      case "Open: Escalation Workflow Guide":
        alert("Opening Escalation Workflow Guide...");
        break;
      case "Open: API Integration Guide":
        alert("Opening API Integration Guide...");
        break;
      case "Start Chat":
        alert("Internal chat started with selected team.");
        break;
      case "Save Note":
        alert("Internal note saved for ticket.");
        break;
      case "Escalate":
        alert("Ticket escalated to selected authority.");
        break;
      case "Send Email":
        alert("Email sent successfully to customer.");
        break;
      case "Download":
        alert("Report downloaded.");
        break;
      case "Resolve":
        alert("Ticket marked as resolved.");
        break;
      default:
        alert(`Action triggered: ${action}`);
    }
  }
});

// Handle form submissions inside popup
popupMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// ===================== SIDEBAR POPUPS =====================
function setupSidebarPopup(linkId, modalId, backdropId, closeId) {
  const link = document.getElementById(linkId);
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(backdropId);
  const closeBtn = document.getElementById(closeId);

  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      modal.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
}

setupSidebarPopup("assignedTicketsLink", "assignedModal", "assignedBackdrop", "assignedClose");
setupSidebarPopup("reportsLink", "reportsModal", "reportsBackdrop", "reportsClose");
setupSidebarPopup("emailSectionLink", "emailModal", "emailBackdrop", "emailClose");

// ===================== HAMBURGER FUNCTIONALITY =====================
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector("main");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    hamburger.classList.toggle("open");
    mainContent.classList.toggle("sidebar-open");
  });
}

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
