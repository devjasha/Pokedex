
function setupTabs() {
  const detailInfoContainer = document.querySelector(".info");
  const tabToActivate = detailInfoContainer.querySelector(`.content[data-tab="1"]`);

  document.querySelectorAll(".link")[0].classList.add("is-active");
  tabToActivate.classList.add("is-active");

  document.querySelectorAll(".link").forEach(button => {
    button.addEventListener("click", () => {
      const link = button.parentElement;
      const containerNumber = button.dataset.forTab;
      const tabToActivate = detailInfoContainer.querySelector(`.content[data-tab="${containerNumber}"]`);

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
};

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});
