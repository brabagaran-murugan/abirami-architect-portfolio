// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

// Placeholder projects data
const projects = [
  {
    tagline: "Residential concept",
    title: "Earth Courtyard House",
    description:
      "A calm inner-courtyard home concept with rammed earth walls, filtered daylight, and layered thresholds between inside and outside.",
    meta: ["Concept study", "Rammed earth", "Inner courtyard"],
    status: "Placeholder · Replace with real project",
    year: "2023"
  },
  {
    tagline: "Community space",
    title: "Slow Gathering Pavilion",
    description:
      "An open pavilion for small community events, using timber, soft lighting, and flexible seating to encourage informal gatherings.",
    meta: ["Community", "Timber structure", "Adaptive use"],
    status: "Placeholder · Replace with real project",
    year: "2022"
  },
  {
    tagline: "Interior architecture",
    title: "Clay & Light Apartment",
    description:
      "An apartment interior concept with clay plasters, muted textiles, and built-in joinery to create a warm, grounded atmosphere.",
    meta: ["Interior", "Clay plaster", "Soft palette"],
    status: "Placeholder · Replace with real project",
    year: "2021"
  },
  {
    tagline: "AI-assisted study",
    title: "Topography Retreat",
    description:
      "Exploration of a hillside retreat where AI-generated visual studies informed massing, light, and material transitions.",
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

// Reveal-on-scroll animation for project cards
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
