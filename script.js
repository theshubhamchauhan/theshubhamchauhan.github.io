const filterButtons = document.querySelectorAll(".filter-button");
const toolCards = document.querySelectorAll(".tool-card");
const filterStatus = document.querySelector(".filter-status");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");

const categoryNames = {
  all: "advertising platforms",
  retail: "retail media platforms",
  programmatic: "programmatic platforms",
  paid: "paid media platforms",
};

function setFilter(category) {
  let visibleCount = 0;

  toolCards.forEach((card) => {
    const categories = card.dataset.categories.split(" ");
    const isVisible = category === "all" || categories.includes(category);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  filterStatus.textContent = `I’ve worked with ${visibleCount} ${categoryNames[category]}.`;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeLabel.textContent = isDark ? "Night mode" : "Day mode";
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
