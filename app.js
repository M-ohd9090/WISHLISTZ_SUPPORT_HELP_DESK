// ================== SIDEBAR TOGGLE ==================
const hamburgerBtn = document.getElementById("hamburger");
const sidebarEl = document.querySelector(".sidebar");
const mainEl = document.querySelector("main");

if (hamburgerBtn && sidebarEl && mainEl) {
  hamburgerBtn.addEventListener("click", () => {
    sidebarEl.classList.toggle("closed");
    hamburgerBtn.classList.toggle("open");
    mainEl.classList.toggle("sidebar-open");
  });
}


// ===================== POPUP SYSTEM =====================
function openPopup(modalId, backdropId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(backdropId);

  if (modal && backdrop) {
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closePopup(backdropId) {
  const backdrop = document.getElementById(backdropId);
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function setupPopup(linkId, modalId, backdropId, closeId) {
  const link = document.getElementById(linkId);
  const closeBtn = document.getElementById(closeId);
  const backdrop = document.getElementById(backdropId);

  // Open from sidebar
  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openPopup(modalId, backdropId);
    });
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closePopup(backdropId);
    });
  }

  // Click outside modal closes
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closePopup(backdropId);
      }
    });
  }
}


// ===================== SIDEBAR POPUPS =====================
setupPopup("assignedTicketsLink", "assignedModal", "assignedBackdrop", "assignedClose");
setupPopup("reportsLink", "reportsModal", "reportsBackdrop", "reportsClose");
setupPopup("emailSectionLink", "emailModal", "emailBackdrop", "emailClose");


// ===================== MAIN CARD LINKS =====================

// Tickets
document.getElementById("openCreateTicket")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("assignedModal", "assignedBackdrop");
});

document.getElementById("openAssignTicket")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("assignedModal", "assignedBackdrop");
});

// Stats & Reports
document.getElementById("openStats")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("reportsModal", "reportsBackdrop");
});

document.getElementById("openPerformance")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("reportsModal", "reportsBackdrop");
});

// Team
document.getElementById("openTeamList")?.addEventListener("click", (e) => {
  e.preventDefault();
  alert("👥 Team Members:\n- Alice\n- Bob\n- Charlie\n- Diana");
});

document.getElementById("openTeamTasks")?.addEventListener("click", (e) => {
  e.preventDefault();
  alert("📋 Team Tasks:\n- Resolve tickets\n- Prepare reports\n- Customer follow-ups");
});


// ===================== FORMS =====================

// Quick Enquiry
document.getElementById("quickEnquiryForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const orderId = document.getElementById("orderId").value.trim();
  const recipient = document.getElementById("recipient").value;
  const subject = document.getElementById("enquirySubject").value.trim();
  const message = document.getElementById("enquiryMessage").value.trim();

  if (!orderId || !recipient || !subject || !message) {
    alert("Please fill all fields.");
    return;
  }

  alert(
    `Enquiry Submitted ✅\n\nOrder ID: ${orderId}\nRecipient: ${recipient}\nSubject: ${subject}\nMessage: ${message}`
  );

  e.target.reset();
});


// Email Customers
document.getElementById("emailForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("customerEmail").value.trim();
  const message = document.getElementById("emailMessage").value.trim();

  if (!email || !message) {
    alert("Please complete the email form.");
    return;
  }

  alert(`Email sent successfully ✅\n\nTo: ${email}\nMessage: ${message}`);

  e.target.reset();
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
