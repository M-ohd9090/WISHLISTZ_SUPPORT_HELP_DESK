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
