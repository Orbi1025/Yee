document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    // Add a 'scrolled' class to the header after scrolling 50px
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

function copyToClipboard() {
  const contractText = "0xc586bf0999f65bacf168a761ef8f369668bfa773";
  navigator.clipboard
    .writeText(contractText)
    .then(function () {
      const copiedMessage = document.getElementById("copied-message");
      copiedMessage.style.display = "block";
      setTimeout(function () {
        copiedMessage.style.display = "none";
      }, 2000);
    })
    .catch(function (err) {
      console.error("Failed to copy: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = contractText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      const copiedMessage = document.getElementById("copied-message");
      copiedMessage.style.display = "block";
      setTimeout(function () {
        copiedMessage.style.display = "none";
      }, 2000);
    });
}
