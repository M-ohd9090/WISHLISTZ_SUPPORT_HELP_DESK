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

// ================== SHARE US MODAL ==================
const shareUsTrigger = document.getElementById("shareUsLink");
const shareUsModal = document.getElementById("qrModal");
const shareUsBackdrop = document.getElementById("qrBackdrop");
const shareUsClose = document.getElementById("qrClose");
const shareUsCopyBtn = document.getElementById("copyButton");
const shareUsLinkInput = document.getElementById("shareLink");

if (shareUsTrigger && shareUsModal && shareUsBackdrop) {
  shareUsTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    shareUsModal.classList.add("active");
    shareUsBackdrop.classList.add("active");
  });
}

if (shareUsClose) {
  shareUsClose.addEventListener("click", () => {
    shareUsModal.classList.remove("active");
    shareUsBackdrop.classList.remove("active");
  });
}

if (shareUsBackdrop) {
  shareUsBackdrop.addEventListener("click", () => {
    shareUsModal.classList.remove("active");
    shareUsBackdrop.classList.remove("active");
  });
}

if (shareUsCopyBtn && shareUsLinkInput) {
  shareUsCopyBtn.addEventListener("click", () => {
    shareUsLinkInput.select();
    document.execCommand("copy");
    shareUsCopyBtn.textContent = "Copied!";
    setTimeout(() => { shareUsCopyBtn.textContent = "Copy"; }, 2000);
  });
}

// ================== REVIEW MODAL ==================
const reviewTrigger = document.getElementById("reviewLink");
const reviewModalEl = document.getElementById("reviewModal");
const reviewBackdropEl = document.getElementById("reviewBackdrop");
const reviewCloseBtn = document.getElementById("reviewClose");
const reviewFormEl = document.getElementById("reviewForm");
const reviewResultEl = document.getElementById("reviewResult");

if (reviewTrigger && reviewModalEl && reviewBackdropEl) {
  reviewTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    reviewModalEl.classList.add("active");
    reviewBackdropEl.classList.add("active");
  });
}

if (reviewCloseBtn) {
  reviewCloseBtn.addEventListener("click", () => {
    reviewModalEl.classList.remove("active");
    reviewBackdropEl.classList.remove("active");
  });
}

if (reviewBackdropEl) {
  reviewBackdropEl.addEventListener("click", () => {
    reviewModalEl.classList.remove("active");
    reviewBackdropEl.classList.remove("active");
  });
}

if (reviewFormEl) {
  reviewFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    reviewResultEl.style.display = "block";
    reviewFormEl.reset();
    setTimeout(() => {
      reviewModalEl.classList.remove("active");
      reviewBackdropEl.classList.remove("active");
      reviewResultEl.style.display = "none";
    }, 2000);
  });
}
