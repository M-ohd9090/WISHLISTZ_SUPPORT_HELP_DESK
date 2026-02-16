/* ===================== SIDEBAR TOGGLE ===================== */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector("main");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("closed");
      hamburger.classList.toggle("open");
      mainContent.classList.toggle("sidebar-open");
    });
  }

  /* ===================== SERVICES PAGE JS ===================== */
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("selected");
    });
  });

  /* ===================== FAQ MODAL ===================== */
  const faqCard = document.getElementById("faqCard");
  const faqModal = document.getElementById("faqModal");
  const faqBackdrop = document.getElementById("faqBackdrop");
  const faqClose = document.getElementById("faqClose");

  if (faqCard && faqModal && faqBackdrop && faqClose) {
    faqCard.addEventListener("click", (e) => {
      e.preventDefault();
      faqModal.classList.add("active");
      faqBackdrop.classList.add("active");
    });

    faqClose.addEventListener("click", () => {
      faqModal.classList.remove("active");
      faqBackdrop.classList.remove("active");
    });

    faqBackdrop.addEventListener("click", () => {
      faqModal.classList.remove("active");
      faqBackdrop.classList.remove("active");
    });
  }

  /* ===================== ABOUT WISHLISTZ MODAL ===================== */
  const aboutCard = document.getElementById("aboutCard");
  const aboutModal = document.getElementById("aboutModal");
  const aboutBackdrop = document.getElementById("aboutBackdrop");
  const aboutClose = document.getElementById("aboutClose");

  if (aboutCard && aboutModal && aboutBackdrop && aboutClose) {
    aboutCard.addEventListener("click", (e) => {
      e.preventDefault();
      aboutModal.classList.add("active");
      aboutBackdrop.classList.add("active");
    });

    aboutClose.addEventListener("click", () => {
      aboutModal.classList.remove("active");
      aboutBackdrop.classList.remove("active");
    });

    aboutBackdrop.addEventListener("click", () => {
      aboutModal.classList.remove("active");
      aboutBackdrop.classList.remove("active");
    });
  }

  /* ===================== CONTACT US MODAL ===================== */
  const contactCard = document.getElementById("contactCard");
  const contactModal = document.getElementById("contactModal");
  const contactBackdrop = document.getElementById("contactBackdrop");
  const contactClose = document.getElementById("contactClose");

  if (contactCard && contactModal && contactBackdrop && contactClose) {
    contactCard.addEventListener("click", (e) => {
      e.preventDefault();
      contactModal.classList.add("active");
      contactBackdrop.classList.add("active");
    });

    contactClose.addEventListener("click", () => {
      contactModal.classList.remove("active");
      contactBackdrop.classList.remove("active");
    });

    contactBackdrop.addEventListener("click", () => {
      contactModal.classList.remove("active");
      contactBackdrop.classList.remove("active");
    });
  }
});

// RAISE TICKET modal toggle
const raiseTicketCard = document.getElementById("raiseTicketCard");
const ticketModal = document.getElementById("ticketModal");
const ticketBackdrop = document.getElementById("ticketBackdrop");
const ticketClose = document.getElementById("ticketClose");

if (raiseTicketCard && ticketModal && ticketBackdrop && ticketClose) {
  raiseTicketCard.addEventListener("click", (e) => {
    e.preventDefault();
    ticketModal.classList.add("active");
    ticketBackdrop.classList.add("active");
  });

  ticketClose.addEventListener("click", () => {
    ticketModal.classList.remove("active");
    ticketBackdrop.classList.remove("active");
  });

  ticketBackdrop.addEventListener("click", () => {
    ticketModal.classList.remove("active");
    ticketBackdrop.classList.remove("active");
  });
}

// Handle form submission
const ticketForm = document.getElementById("ticketForm");
if (ticketForm) {
  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your ticket has been submitted successfully!");
    ticketModal.classList.remove("active");
    ticketBackdrop.classList.remove("active");
    ticketForm.reset();
  });
}

// TICKET STATUS modal toggle
const ticketStatusCard = document.getElementById("ticketStatusCard");
const statusModal = document.getElementById("statusModal");
const statusBackdrop = document.getElementById("statusBackdrop");
const statusClose = document.getElementById("statusClose");

if (ticketStatusCard && statusModal && statusBackdrop && statusClose) {
  ticketStatusCard.addEventListener("click", (e) => {
    e.preventDefault();
    statusModal.classList.add("active");
    statusBackdrop.classList.add("active");
  });

  statusClose.addEventListener("click", () => {
    statusModal.classList.remove("active");
    statusBackdrop.classList.remove("active");
  });

  statusBackdrop.addEventListener("click", () => {
    statusModal.classList.remove("active");
    statusBackdrop.classList.remove("active");
  });
}

// Handle status form submission
const statusForm = document.getElementById("statusForm");
const statusResult = document.getElementById("statusResult");

if (statusForm && statusResult) {
  statusForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ticketId = document.getElementById("ticketId").value.trim();

    // For now, just show a placeholder result
    statusResult.style.display = "block";
    statusResult.textContent = `Status for Ticket ${ticketId}: Pending review.`;

    // In real use, you’d fetch status from your backend API here
  });
}

// PAYMENT HISTORY modal toggle
const paymentHistoryCard = document.getElementById("paymentHistoryCard");
const paymentHistoryModal = document.getElementById("paymentHistoryModal");
const paymentHistoryBackdrop = document.getElementById("paymentHistoryBackdrop");
const paymentHistoryClose = document.getElementById("paymentHistoryClose");

if (paymentHistoryCard && paymentHistoryModal && paymentHistoryBackdrop && paymentHistoryClose) {
  paymentHistoryCard.addEventListener("click", (e) => {
    e.preventDefault();
    paymentHistoryModal.classList.add("active");
    paymentHistoryBackdrop.classList.add("active");
  });

  paymentHistoryClose.addEventListener("click", () => {
    paymentHistoryModal.classList.remove("active");
    paymentHistoryBackdrop.classList.remove("active");
  });

  paymentHistoryBackdrop.addEventListener("click", () => {
    paymentHistoryModal.classList.remove("active");
    paymentHistoryBackdrop.classList.remove("active");
  });
}

// FAILED PAYMENTS modal toggle
const failedPaymentsCard = document.getElementById("failedPaymentsCard");
const failedPaymentsModal = document.getElementById("failedPaymentsModal");
const failedPaymentsBackdrop = document.getElementById("failedPaymentsBackdrop");
const failedPaymentsClose = document.getElementById("failedPaymentsClose");

if (failedPaymentsCard && failedPaymentsModal && failedPaymentsBackdrop && failedPaymentsClose) {
  failedPaymentsCard.addEventListener("click", (e) => {
    e.preventDefault();
    failedPaymentsModal.classList.add("active");
    failedPaymentsBackdrop.classList.add("active");
  });

  failedPaymentsClose.addEventListener("click", () => {
    failedPaymentsModal.classList.remove("active");
    failedPaymentsBackdrop.classList.remove("active");
  });

  failedPaymentsBackdrop.addEventListener("click", () => {
    failedPaymentsModal.classList.remove("active");
    failedPaymentsBackdrop.classList.remove("active");
  });
}

// REFUND STATUS modal toggle
const refundStatusCard = document.getElementById("refundStatusCard");
const refundStatusModal = document.getElementById("refundStatusModal");
const refundStatusBackdrop = document.getElementById("refundStatusBackdrop");
const refundStatusClose = document.getElementById("refundStatusClose");

if (refundStatusCard && refundStatusModal && refundStatusBackdrop && refundStatusClose) {
  refundStatusCard.addEventListener("click", (e) => {
    e.preventDefault();
    refundStatusModal.classList.add("active");
    refundStatusBackdrop.classList.add("active");
  });

  refundStatusClose.addEventListener("click", () => {
    refundStatusModal.classList.remove("active");
    refundStatusBackdrop.classList.remove("active");
  });

  refundStatusBackdrop.addEventListener("click", () => {
    refundStatusModal.classList.remove("active");
    refundStatusBackdrop.classList.remove("active");
  });
}

// Handle refund form submission
const refundForm = document.getElementById("refundForm");
const refundResult = document.getElementById("refundResult");

if (refundForm && refundResult) {
  refundForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("refundOrderId").value.trim();
    refundResult.style.display = "block";
    refundResult.textContent = `Refund for Order ${orderId}: Processed – Expected credit within 5–7 business days.`;
  });
}

// TRACK ORDER modal toggle
const trackOrderCard = document.getElementById("trackOrderCard");
const trackOrderModal = document.getElementById("trackOrderModal");
const trackOrderBackdrop = document.getElementById("trackOrderBackdrop");
const trackOrderClose = document.getElementById("trackOrderClose");

if (trackOrderCard && trackOrderModal && trackOrderBackdrop && trackOrderClose) {
  trackOrderCard.addEventListener("click", (e) => {
    e.preventDefault();
    trackOrderModal.classList.add("active");
    trackOrderBackdrop.classList.add("active");
  });

  trackOrderClose.addEventListener("click", () => {
    trackOrderModal.classList.remove("active");
    trackOrderBackdrop.classList.remove("active");
  });

  trackOrderBackdrop.addEventListener("click", () => {
    trackOrderModal.classList.remove("active");
    trackOrderBackdrop.classList.remove("active");
  });
}

const trackOrderForm = document.getElementById("trackOrderForm");
const trackOrderResult = document.getElementById("trackOrderResult");
if (trackOrderForm && trackOrderResult) {
  trackOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("trackOrderId").value.trim();
    trackOrderResult.style.display = "block";
    trackOrderResult.textContent = `Order ${orderId} is currently in transit. Expected delivery: 16 Feb 2026.`;
  });
}

// RETURN ORDER modal toggle
const returnOrderCard = document.getElementById("returnOrderCard");
const returnOrderModal = document.getElementById("returnOrderModal");
const returnOrderBackdrop = document.getElementById("returnOrderBackdrop");
const returnOrderClose = document.getElementById("returnOrderClose");

if (returnOrderCard && returnOrderModal && returnOrderBackdrop && returnOrderClose) {
  returnOrderCard.addEventListener("click", (e) => {
    e.preventDefault();
    returnOrderModal.classList.add("active");
    returnOrderBackdrop.classList.add("active");
  });

  returnOrderClose.addEventListener("click", () => {
    returnOrderModal.classList.remove("active");
    returnOrderBackdrop.classList.remove("active");
  });

  returnOrderBackdrop.addEventListener("click", () => {
    returnOrderModal.classList.remove("active");
    returnOrderBackdrop.classList.remove("active");
  });
}

const returnOrderForm = document.getElementById("returnOrderForm");
const returnOrderResult = document.getElementById("returnOrderResult");
if (returnOrderForm && returnOrderResult) {
  returnOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("returnOrderId").value.trim();
    returnOrderResult.style.display = "block";
    returnOrderResult.textContent = `Return request for Order ${orderId} has been submitted. Our team will contact you shortly.`;
  });
}

// REPLACE ITEM modal toggle
const replaceItemCard = document.getElementById("replaceItemCard");
const replaceItemModal = document.getElementById("replaceItemModal");
const replaceItemBackdrop = document.getElementById("replaceItemBackdrop");
const replaceItemClose = document.getElementById("replaceItemClose");

if (replaceItemCard && replaceItemModal && replaceItemBackdrop && replaceItemClose) {
  replaceItemCard.addEventListener("click", (e) => {
    e.preventDefault();
    replaceItemModal.classList.add("active");
    replaceItemBackdrop.classList.add("active");
  });

  replaceItemClose.addEventListener("click", () => {
    replaceItemModal.classList.remove("active");
    replaceItemBackdrop.classList.remove("active");
  });

  replaceItemBackdrop.addEventListener("click", () => {
    replaceItemModal.classList.remove("active");
    replaceItemBackdrop.classList.remove("active");
  });
}

const replaceItemForm = document.getElementById("replaceItemForm");
const replaceItemResult = document.getElementById("replaceItemResult");
if (replaceItemForm && replaceItemResult) {
  replaceItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("replaceItemId").value.trim();
    replaceItemResult.style.display = "block";
    replaceItemResult.textContent = `Replacement request for Order ${orderId} has been submitted. A new item will be shipped soon.`;
  });
}

// CANCEL ORDER modal toggle
const cancelOrderCard = document.getElementById("cancelOrderCard");
const cancelOrderModal = document.getElementById("cancelOrderModal");
const cancelOrderBackdrop = document.getElementById("cancelOrderBackdrop");
const cancelOrderClose = document.getElementById("cancelOrderClose");

if (cancelOrderCard && cancelOrderModal && cancelOrderBackdrop && cancelOrderClose) {
  cancelOrderCard.addEventListener("click", (e) => {
    e.preventDefault();
    cancelOrderModal.classList.add("active");
    cancelOrderBackdrop.classList.add("active");
  });

  cancelOrderClose.addEventListener("click", () => {
    cancelOrderModal.classList.remove("active");
    cancelOrderBackdrop.classList.remove("active");
  });

  cancelOrderBackdrop.addEventListener("click", () => {
    cancelOrderModal.classList.remove("active");
    cancelOrderBackdrop.classList.remove("active");
  });
}

const cancelOrderForm = document.getElementById("cancelOrderForm");
const cancelOrderResult = document.getElementById("cancelOrderResult");
if (cancelOrderForm && cancelOrderResult) {
  cancelOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("cancelOrderId").value.trim();
    cancelOrderResult.style.display = "block";
    cancelOrderResult.textContent = `Order ${orderId} has been cancelled successfully. Refund will be processed within 5–7 business days.`;
  });
}

// ================== SHARE US QR MODAL ==================
const shareUsLink = document.getElementById("shareUsLink");
const qrModal = document.getElementById("qrModal");
const qrBackdrop = document.getElementById("qrBackdrop");
const qrClose = document.getElementById("qrClose");
const copyButton = document.getElementById("copyButton");
const shareLink = document.getElementById("shareLink");

if (shareUsLink) {
  shareUsLink.addEventListener("click", (e) => {
    e.preventDefault();
    qrModal.classList.add("active");
    qrBackdrop.classList.add("active");
  });
}

if (qrClose) {
  qrClose.addEventListener("click", () => {
    qrModal.classList.remove("active");
    qrBackdrop.classList.remove("active");
  });
}

if (qrBackdrop) {
  qrBackdrop.addEventListener("click", () => {
    qrModal.classList.remove("active");
    qrBackdrop.classList.remove("active");
  });
}

if (copyButton) {
  copyButton.addEventListener("click", () => {
    shareLink.select();
    document.execCommand("copy");
    copyButton.textContent = "Copied!";
    setTimeout(() => { copyButton.textContent = "Copy"; }, 2000);
  });
}

// ================== REVIEW MODAL ==================
const reviewLink = document.getElementById("reviewLink");
const reviewModal = document.getElementById("reviewModal");
const reviewBackdrop = document.getElementById("reviewBackdrop");
const reviewClose = document.getElementById("reviewClose");
const reviewForm = document.getElementById("reviewForm");
const reviewResult = document.getElementById("reviewResult");

if (reviewLink) {
  reviewLink.addEventListener("click", (e) => {
    e.preventDefault();
    reviewModal.classList.add("active");
    reviewBackdrop.classList.add("active");
  });
}

if (reviewClose) {
  reviewClose.addEventListener("click", () => {
    reviewModal.classList.remove("active");
    reviewBackdrop.classList.remove("active");
  });
}

if (reviewBackdrop) {
  reviewBackdrop.addEventListener("click", () => {
    reviewModal.classList.remove("active");
    reviewBackdrop.classList.remove("active");
  });
}

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    reviewResult.style.display = "block";
    // Optionally clear form
    reviewForm.reset();
    setTimeout(() => {
      reviewModal.classList.remove("active");
      reviewBackdrop.classList.remove("active");
      reviewResult.style.display = "none";
    }, 2000);
  });
}