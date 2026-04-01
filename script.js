// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

// Placeholder projects
const projects = [
  {
    tagline: "Residential concept",
    title: "Earth Courtyard House",
    description:
      "A courtyard home organized around a planted void, with rammed earth walls, filtered daylight, and layered thresholds.",
    meta: ["Concept study", "Rammed earth", "Inner courtyard"],
    status: "Placeholder · Replace with real project",
    year: "2023"
  },
  {
    tagline: "Community space",
    title: "Slow Gathering Pavilion",
    description:
      "A timber pavilion for small community events, designed as a soft edge between landscape and built form.",
    meta: ["Community", "Timber structure", "Adaptive use"],
    status: "Placeholder · Replace with real project",
    year: "2022"
  },
  {
    tagline: "Interior architecture",
    title: "Clay & Light Apartment",
    description:
      "An interior concept using clay plasters, muted textiles, and built-in joinery to create a grounded, quiet home.",
    meta: ["Interior", "Clay plaster", "Soft palette"],
    status: "Placeholder · Replace with real project",
    year: "2021"
  },
  {
    tagline: "AI-assisted study",
    title: "Topography Retreat",
    description:
      "A hillside retreat where AI-generated visual studies informed massing, light, and material transitions.",
    meta: ["AI visualization", "Retreat", "Landscape integration"],
    status: "Placeholder · Replace with real project",
    year: "2024"
  }
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <div>
      <div class="project-tagline">${project.tagline}</div>
      <h3 class="project-title">${project.title}</h3>
    </div>
    <p class="project-description">${project.description}</p>
    <div class="project-meta">
      ${project.meta.map((m) => `<span>${m}</span>`).join("")}
    </div>
    <div class="project-footer">
      <span>${project.year}</span>
      <span class="project-status">${project.status}</span>
    </div>
  `;

  projectsGrid.appendChild(card);
});

// Reveal-on-scroll for project cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".project-card").forEach((card) => {
  observer.observe(card);
});
