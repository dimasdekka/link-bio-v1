const copyLink = document.querySelectorAll(".right-item");
const toast = document.querySelector(".toast");

copyLink.forEach((copy) => {
  copy.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(copy.parentElement.getAttribute("href"));
    document.getElementById("toast").innerHTML = `
      <div class="toast-pop">
        <p>✅ Link berhasil disalin !</p>
      </div>`;

    setTimeout(() => {
      document.querySelector("#toast .toast-pop").classList.add("toast-hide");
    }, 500);

    setTimeout(() => {
      document.querySelector("#toast .toast-pop").remove();
    }, 2500);
  });
});

document.querySelectorAll(".social i").forEach((social) => {
  social.addEventListener("mouseenter", () => {
    social.classList.remove("ph");
    social.classList.add("ph-fill");
  });

  social.addEventListener("mouseleave", () => {
    social.classList.remove("ph-fill");
    social.classList.add("ph");
  });
});

// Scrol

document.addEventListener("scroll", (e) => {
  document.querySelector(
    ".bg-text"
  ).style.transform = `translateX(${window.scrollY}px)`;
});
