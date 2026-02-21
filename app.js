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
    modal.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closePopup(modalId, backdropId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(backdropId);

  if (modal && backdrop) {
    modal.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function setupPopup(linkId, modalId, backdropId, closeId) {
  const link = document.getElementById(linkId);
  const closeBtn = document.getElementById(closeId);
  const backdrop = document.getElementById(backdropId);

  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openPopup(modalId, backdropId);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closePopup(modalId, backdropId);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closePopup(modalId, backdropId);
      }
    });
  }
}


// ===================== CONNECT SIDEBAR POPUPS =====================

setupPopup("assignedLink", "assignedModal", "assignedBackdrop", "assignedClose");
setupPopup("reportsLink", "reportsModal", "reportsBackdrop", "reportsClose");
setupPopup("emailSectionLink", "emailModal", "emailBackdrop", "emailClose");


// ===================== ASSIGNED TABLE ACTION =====================

const assignedTable = document.querySelector(".assigned-table");

if (assignedTable) {
  assignedTable.addEventListener("click", (e) => {
    if (e.target.classList.contains("resolve-btn")) {
      const row = e.target.closest("tr");
      const statusDropdown = row.querySelector(".status-dropdown");

      if (statusDropdown) {
        statusDropdown.value = "Resolved";
        statusDropdown.classList.add("status-resolved");
      }

      e.target.disabled = true;
      e.target.textContent = "Done";
    }
  });
}


// ===================== QUICK ENQUIRY FORM =====================

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


// ===================== EMAIL FORM =====================

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


// ===================== SIGN OUT POPUP =====================

const signoutLink = document.getElementById("signoutLink");
const signoutPopup = document.getElementById("signoutPopup");
const confirmSignout = document.getElementById("confirmSignout");
const cancelSignout = document.getElementById("cancelSignout");

if (signoutLink && signoutPopup) {
  signoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    signoutPopup.classList.remove("hidden");
  });
}

if (cancelSignout) {
  cancelSignout.addEventListener("click", () => {
    signoutPopup.classList.add("hidden");
  });
}

if (confirmSignout) {
  confirmSignout.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
