
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    filters.forEach((button) => {
      button.classList.toggle("active", button === filter);
    });

    projects.forEach((project) => {
      const matches =
        category === "all" ||
        project.dataset.category === category;

      project.hidden = !matches;
    });
  });
});

document.querySelector("#year").textContent =
  new Date().getFullYear();
