function openModal(imgElement) {
  if (window.innerWidth > 768) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = imgElement.src;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
    modalImg.style.maxWidth = "95%";
    modalImg.style.maxHeight = "95%";
    modalImg.style.objectFit = "contain";

    // Fechar com ESC
    document.addEventListener("keydown", closeOnEscape);
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");

  // Retornar foco à imagem que foi clicada
  document.activeElement.blur();
}

function closeOnEscape(event) {
  if (event.key === "Escape") {
    closeModal();
    document.removeEventListener("keydown", closeOnEscape);
  }
}
document.getElementById("read-more-btn").addEventListener("click", function () {
  const hiddenContent = document.getElementById("hidden-content");
  const button = document.getElementById("read-more-btn");

  if (hiddenContent.classList.contains("d-none")) {
    hiddenContent.classList.remove("d-none");
    button.textContent = "Leia menos";
  } else {
    hiddenContent.classList.add("d-none");
    button.textContent = "Leia mais";
  }
});
