function setupTabs() {
  document.querySelectorAll(".link").forEach(button => {
    button.addEventListener("click", () => {
      const link = button.parentElement;
      const detailInfoContainer = document.querySelector(".info");
      const containerNumber = button.dataset.forTab;
      const tabToActivate = detailInfoContainer.querySelector(`.content[data-tab="${containerNumber}"]`)

      link.querySelectorAll(".link").forEach(button => {
        button.classList.remove("is-active");
      })

      detailInfoContainer.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("is-active");
      })

      button.classList.add("is-active");
      tabToActivate.classList.add("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
})
