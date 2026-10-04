// Add your LinkedIn URL here (leave empty to hide it everywhere).
const LINKEDIN = "";

const content = document.getElementById("content");
const themeToggle = document.getElementById("themeToggle");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const nav = document.getElementById("nav");

const navLabels = {
  home: "Home",
  projects: "Projects",
  skills: "Skills",
  credentials: "Credentials",
  about: "About",
  contact: "Contact"
};

nav.innerHTML = Object.entries(navLabels)
  .map(([viewName, label]) => `<button class="nav-item" type="button" data-view="${viewName}">${label}</button>`)
  .join("");

const navItems = document.querySelectorAll(".nav-item");

const PROJECTS = [
  {
    id: "kapehan",
    title: "Kapehan ni Amang — POS System",
    short: "Kapehan ni Amang POS",
    detailTitle: "Kapehan ni Amang — Point of Sales System",
    heroSubtitle: "A closer look at one of my main academic projects.",
    type: "Academic / capstone project.",
    card: "Academic/capstone Point of Sales system with ordering, cashier, inventory, and role-based functionality.",
    preview: "PHP · MySQL · JavaScript",
    image: "images/kapehan.jpg",
    imageAlt: "Kapehan ni Amang landing page",
    tags: ["PHP", "MySQL", "JavaScript"],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    overview: "A web-based Point of Sales system designed to support ordering, cashier operations, inventory, and administrative monitoring for Kapehan ni Amang.",
    contributions: [
      "Developed and improved core POS modules.",
      "Implemented role-based access for Admin, Cashier, Student, and Faculty users.",
      "Designed and integrated MySQL database functionality.",
      "Worked on inventory, product, payment, and order management.",
      "Developed and implemented receipt generation and printing functionality.",
      "Worked on receipt layout and formatting for POS transactions.",
      "Contributed to the system's UI/UX improvements.",
      "Performed system testing, debugging, and troubleshooting."
    ],
    features: ["Role-based access", "Ordering and pre-order workflow", "Cashier / walk-in ordering", "Inventory and product management", "Order monitoring", "Reports and feedback"],
    links: [{ label: "View project on GitHub", href: "https://github.com/jorgejerixbanagan-dotcom/earist-pos.git" }]
  },
  {
    id: "liwanag",
    title: "Liwanag Cafe — Reservation & Ordering System",
    short: "Liwanag Cafe",
    detailTitle: "Liwanag Cafe — Reservation & Ordering System",
    heroSubtitle: "A cafe website with online ordering, table reservations, and an admin dashboard.",
    type: "Web development project.",
    card: "Web-based cafe system where customers browse the menu, order, and reserve tables, while admins manage everything from a dashboard.",
    preview: "PHP · MySQL · JavaScript",
    image: "images/liwanag.jpg",
    imageAlt: "Liwanag Cafe home page",
    tags: ["PHP", "MySQL", "JavaScript"],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "PHPMailer", "Composer", "XAMPP"],
    overview: "A PHP-based restaurant cafe management system for managing products, orders, reservations, and users. Customers can browse the menu, create an account, place orders, and book a table, while admins monitor operations from a dashboard.",
    contributions: [
      "Built and styled the customer-facing pages, including the home, menu, and reservation pages.",
      "Developed the registration, login, and password-reset flows.",
      "Connected the PHP pages to the MySQL database.",
      "Worked on the order, checkout, and reservation features.",
      "Contributed to the admin dashboard and its management pages.",
      "Tested the system and fixed bugs across the main user flows."
    ],
    features: ["User registration and login", "Google sign-in", "Password reset by email", "Menu and product management", "Order management and checkout", "Table reservations for customers and admins", "Admin dashboard with analytics", "Email notifications"],
    links: [{ label: "View project on GitHub", href: "https://github.com/afkmark/Restaurant_Cafe" }]
  },
  {
    id: "library",
    title: "RFID-Based Smart Library Management System",
    short: "Smart Library (RFID)",
    detailTitle: "RFID-Based Smart Library Management System",
    heroSubtitle: "An Arduino project that uses RFID to make library tasks faster and smarter.",
    type: "Arduino / hardware project.",
    card: "Arduino-based library prototype that uses RFID cards and tags to identify members and books, with LED and buzzer feedback.",
    preview: "C++ · Arduino · RFID",
    image: "images/library.jpg",
    imageAlt: "Miniature model of the smart library",
    focus: "center",
    tags: ["C++", "Arduino", "RFID"],
    stack: ["C++", "Arduino Uno", "RFID Reader (MFRC522)", "RFID Tags/Cards", "Buzzer", "LEDs", "Jumper Wires", "Breadboard", "USB Cable", "Battery"],
    overview: "An Arduino Uno–based prototype that automates basic library tasks using RFID. Members and books carry RFID tags or cards, the MFRC522 reader scans them, and the C++ program responds with LED and buzzer signals so the result is clear right away.",
    contributions: [
      "Focused on the hardware side of the project; the C++ code was written by my teammates.",
      "Assembled the circuit by wiring the MFRC522 reader, LEDs, and buzzer to the Arduino Uno using a breadboard and jumper wires.",
      "Prepared the components and set up power through the USB cable or battery.",
      "Tested RFID card and tag scanning and checked the LED and buzzer responses.",
      "Troubleshot loose connections and wiring problems until the prototype worked reliably.",
      "Helped prepare the project documentation and presentation."
    ],
    features: [
      "RFID-based identification of library members and books",
      "Contactless tap-to-scan, with no manual typing",
      "LED indicators that show whether a tag is recognized",
      "Buzzer sounds for confirmation and error alerts",
      "Faster and more accurate than manual logbooks",
      "Compact, portable setup powered by USB or battery"
    ],
    links: [{ label: "View project on GitHub", href: "https://github.com/jorgejerixbanagan-dotcom/RFID-Based-Smart-Library-Management-System" }]
  }
];

const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
const tagList = items => `<div class="tags">${items.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
const pic = p => `<img src="${p.image}" alt="" loading="lazy" style="object-position:${p.focus || "top center"}" onerror="this.remove()">`;

function homePreviews() {
  return PROJECTS.slice(0, 2).map(p => `
        <div class="home-project-preview">
          <div class="home-project-image" role="img" aria-label="${p.imageAlt}">
            <span class="project-image-icon" aria-hidden="true">▧</span>${pic(p)}
          </div>
          <strong>${p.short}</strong>
          <small>${p.preview}</small>
        </div>`).join("");
}

function projectDetailTemplate(p) {
  return `
    <div class="card detail-card">
      <button class="back-btn" data-open="projects">← Back to projects</button>
      <h3 class="detail-title">${p.detailTitle}</h3>
      <p class="detail-subtitle">${p.type}</p>
      <img class="project-hero-img" src="${p.image}" alt="${p.imageAlt}" style="object-position:${p.focus || "top center"}" onerror="this.remove()">
      <div class="detail-columns">
        <div><h4>Overview</h4><p>${p.overview}</p>${tagList(p.stack)}</div>
        <div><h4>My Contributions</h4>${list(p.contributions)}</div>
        <div><h4>System Features</h4>${list(p.features)}</div>
        ${p.links.length ? `<div><h4>Project Links</h4>${p.links.map(l => `<p><a class="subtle-link" href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a></p>`).join("")}</div>` : ""}
      </div>
    </div>
  `;
}

const CREDENTIALS = [
  {
    title: "Certificate of Participation",
    event: "1st EARIST Cavite Research Colloquium",
    theme: "Theme: “Innovation, Research, and Community Impact”",
    org: "Eulogio “Amang” Rodriguez Institute of Science and Technology – Cavite",
    date: "March 26, 2026",
    short: "Mar 2026",
    image: "images/certificate.jpg",
    imageAlt: "Certificate of Participation, 1st EARIST Cavite Research Colloquium"
  }
];

const views = {
  home: {
    title: "Building practical systems with technology.",
    subtitle: "4th-year IT student focused on web development, system development, databases, and creating useful digital solutions.",
    html: homeTemplate()
  },
  projects: {
    title: "Projects that turn ideas into working systems.",
    subtitle: "A collection of academic, personal, and future professional projects.",
    html: projectsTemplate()
  },
  skills: {
    title: "Tools, technologies, and things I can build with.",
    subtitle: "A growing technical toolkit developed through coursework, projects, and hands-on practice.",
    html: skillsTemplate()
  },
  credentials: {
    title: "Learning, training, and credentials.",
    subtitle: "Certificates, seminars, workshops, and academic achievements will appear here.",
    html: credentialsTemplate()
  },
  about: {
    title: "A little more about me.",
    subtitle: "My background, interests, and the kind of technology work I enjoy.",
    html: aboutTemplate()
  },
  contact: {
    title: "Let's connect.",
    subtitle: "Have a project, opportunity, or question? Email is the fastest way to reach me.",
    html: contactTemplate()
  }
};

function card(icon, title, text, view, extra = "") {
  return `
    <article class="card clickable ${extra}" data-open="${view}">
      <div class="card-head">
        <div class="icon">${icon}</div>
        <h3>${title}</h3>
      </div>
      <p>${text}</p>
    </article>
  `;
}

function homeTemplate() {
  return `
    <article class="card clickable project-featured card-wide" data-open="projects">
      <div class="card-head">
        <div class="icon">▣</div>
        <h3>Projects</h3>
      </div>
      <p>Academic and personal systems I've built or contributed to.</p>
      <div class="home-projects-preview" aria-label="Project previews">${homePreviews()}
      </div>
    </article>

    <article class="card clickable" data-open="about">
      <div class="card-head"><div class="icon">●</div><h3>About</h3></div>
      <p>Information about my background, interests, and direction as an IT student.</p>
      <div class="about-visual"><div></div><div></div><div></div></div>
    </article>

    <article class="card clickable" data-open="credentials">
      <div class="card-head"><div class="icon">◉</div><h3>Credentials</h3></div>
      <p>Certificates, training, seminars, and academic achievements.</p>
      <div class="credential-preview">
        <img src="${CREDENTIALS[0].image}" alt="${CREDENTIALS[0].imageAlt}" onerror="this.remove()">
        <small>${CREDENTIALS[0].title} · ${CREDENTIALS[0].short}</small>
      </div>
    </article>

    <article class="card clickable" data-open="skills">
      <div class="card-head"><div class="icon">◇</div><h3>Skills</h3></div>
      <p>Technologies and technical areas I work with.</p>
      <div class="service-list">
        <div class="service">Web Development</div>
        <div class="service">Database / SQL</div>
        <div class="service">System Development</div>
        <div class="service">UI / UX</div>
        <div class="service">Information Security</div>
      </div>
    </article>

    <article class="card clickable card-wide" data-open="contact">
      <div class="card-head"><div class="icon">“</div><h3>Let's Connect</h3></div>
      <p>Contact details and professional links can be added here.</p>
      <div class="testimonials">
        <div class="quote"><strong>GitHub</strong><p>github.com/jorgejerixbanagan-dotcom</p></div>
        <div class="quote"><strong>Email</strong><p>banaganjorge23@gmail.com</p></div>
      </div>
    </article>
  `;
}

function projectsTemplate() {
  return `
    <div class="card detail-card">
      <button class="back-btn" data-open="home">← Back to overview</button>
      <h3 class="detail-title">Projects</h3>
      <p class="detail-subtitle">Click a project to view its details.</p>

      <div class="project-list">
        ${PROJECTS.map(p => `
        <article class="card project-card clickable" data-open="${p.id}">
          <h3>${p.title}</h3>
          <div class="project-image-placeholder has-image" role="img" aria-label="${p.imageAlt}">
            <span class="project-image-icon" aria-hidden="true">▧</span>
            <span>Project image</span>${pic(p)}
          </div>
          <p>${p.card}</p>
          ${tagList(p.tags)}
        </article>`).join("")}

        <article class="card coming-soon">
          <span class="project-image-icon" aria-hidden="true">▧</span>
          <h3>Next project in progress</h3>
          <p>More projects will be added here as I build them.</p>
        </article>
      </div>
    </div>
  `;
}

function skillsTemplate() {
  return `
    <div class="card detail-card">
      <button class="back-btn" data-open="home">← Back to overview</button>
      <h3 class="detail-title">Skills</h3>
      <p class="detail-subtitle">What I use to design, build, and test systems.</p>
      <div class="detail-columns">
        <div>
          <h4>Web Development</h4>
          <ul>
            <li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>PHP</li>
          </ul>
        </div>
        <div>
          <h4>Database</h4>
          <ul><li>MySQL</li><li>SQL</li><li>phpMyAdmin</li></ul>
        </div>
        <div>
          <h4>Development Tools</h4>
          <ul><li>VS Code</li><li>Git / GitHub</li><li>Laragon</li></ul>
        </div>
        <div>
          <h4>Other Areas</h4>
          <ul><li>System Analysis</li><li>UI / UX</li><li>Information Security</li><li>Troubleshooting</li></ul>
        </div>
      </div>
    </div>
  `;
}

function credentialsTemplate() {
  return `
    <div class="card detail-card">
      <button class="back-btn" data-open="home">← Back to overview</button>
      <h3 class="detail-title">Credentials</h3>
      <p class="detail-subtitle">Certificates and training will be listed here as I earn them.</p>
      <div class="project-list">
        ${CREDENTIALS.map(c => `
        <article class="card">
          <a class="credential-link" href="${c.image}" target="_blank" rel="noopener" title="Open full certificate">
            <img class="credential-img" src="${c.image}" alt="${c.imageAlt}" loading="lazy" onerror="this.remove()">
          </a>
          <h3>${c.title}</h3>
          <p><strong>${c.event}</strong></p>
          <p>${c.theme}</p>
          <p>${c.org}</p>
          <p class="credential-date">${c.date}</p>
        </article>`).join("")}

        <article class="card coming-soon">
          <span class="project-image-icon" aria-hidden="true">◉</span>
          <h3>More coming soon</h3>
          <p>New certificates, training, and achievements will be added here.</p>
        </article>
      </div>
    </div>
  `;
}

function aboutTemplate() {
  return `
    <div class="card detail-card">
      <button class="back-btn" data-open="home">← Back to overview</button>
      <h3 class="detail-title">About Me</h3>
      <p class="detail-subtitle">Who I am and what I am working toward.</p>
      <div class="detail-columns">
        <div class="span-all">
          <h4>Introduction</h4>
          <p class="intro-lead">I Build. I Solve. I Learn.</p>
          <p>I'm a 4th-year Information Technology student who finds joy in turning an idea into something real. From writing the first line of code to finally seeing the system work, every project is a reminder that the problems I struggled with eventually became something I built.</p>
          <p class="intro-quote">If it works, I know the struggle was worth it.</p>
        </div>
        <div>
          <h4>Interests</h4>
          <div class="tags"><span class="tag">Web Development</span><span class="tag">System Development</span><span class="tag">Databases</span><span class="tag">UI/UX</span><span class="tag">Cybersecurity</span></div>
        </div>
        <div>
          <h4>Education</h4>
          <ul class="edu-list">
            <li><strong>Bachelor of Science in Information Technology</strong><span>Eulogio “Amang” Rodriguez Institute of Science and Technology (EARIST) – Cavite</span></li>
            <li><strong>Senior High School — STEM</strong><span>Bulihan Integrated National High School</span></li>
            <li><strong>Junior High School</strong><span>Bulihan Integrated National High School</span></li>
            <li><strong>Elementary</strong><span>Bulihan Sites and Services Project Elementary School</span></li>
          </ul>
        </div>
        <div>
          <h4>Resume</h4>
          <p>A one-page summary of my education, projects, and skills.</p>
          <a class="subtle-link" href="resume/resume.pdf" target="_blank">View Resume ↗</a>
        </div>
      </div>
    </div>
  `;
}

function contactTemplate() {
  return `
    <div class="card detail-card">
      <button class="back-btn" data-open="home">← Back to overview</button>
      <h3 class="detail-title">Contact</h3>
      <p class="detail-subtitle">Reach out any time.</p>
      <div class="contact-box">
        <div class="contact-row"><span>Email</span><a href="mailto:banaganjorge23@gmail.com">banaganjorge23@gmail.com</a></div>
        <div class="contact-row"><span>Phone</span><span>0975*****47</span></div>
        ${LINKEDIN ? `<div class="contact-row"><span>LinkedIn</span><a href="${LINKEDIN}" target="_blank" rel="noopener">View profile ↗</a></div>` : ""}
        <div class="contact-row"><span>GitHub</span><a href="https://github.com/jorgejerixbanagan-dotcom" target="_blank" rel="noopener">jorgejerixbanagan-dotcom ↗</a></div>
      </div>
    </div>
  `;
}

PROJECTS.forEach(p => {
  views[p.id] = { title: p.detailTitle, subtitle: p.heroSubtitle, html: projectDetailTemplate(p) };
});

const BASE_TITLE = document.title;
let userNavigated = false;

function render(viewName) {
  if (!views[viewName]) viewName = "home";
  const view = views[viewName];
  heroTitle.textContent = view.title;
  heroSubtitle.textContent = view.subtitle;
  const project = PROJECTS.find(p => p.id === viewName);
  const label = project ? project.short : navLabels[viewName];
  document.title = viewName === "home" ? BASE_TITLE : `${label} | Jorge Jerix I. Banagan`;

  content.classList.remove("fade");
  void content.offsetWidth;
  content.innerHTML = view.html;
  content.classList.toggle("detail-view", viewName !== "home");
  content.classList.add("fade");

  // Clickable cards must work with the keyboard too.
  content.querySelectorAll("[data-open]").forEach(el => {
    if (!/^(A|BUTTON)$/.test(el.tagName)) { el.tabIndex = 0; el.setAttribute("role", "link"); }
  });

  navItems.forEach(item => {
    const on = item.dataset.view === viewName || Boolean(project && item.dataset.view === "projects");
    item.classList.toggle("active", on);
    on ? item.setAttribute("aria-current", "page") : item.removeAttribute("aria-current");
  });

  content.scrollTop = 0;
  if (userNavigated) content.focus({ preventScroll: true });
}

// Hash routing: back/forward buttons and shareable links (#projects) now work.
function go(viewName) {
  userNavigated = true;
  if (location.hash === "#" + viewName) render(viewName);
  else location.hash = viewName;
}
window.addEventListener("hashchange", () => render(location.hash.slice(1)));

// One delegated handler instead of re-binding on every render.
document.addEventListener("click", e => {
  const el = e.target.closest("[data-open], [data-view]");
  if (!el || e.target.closest("a[href]")) return;
  go(el.dataset.open || el.dataset.view);
});
document.addEventListener("keydown", e => {
  const el = e.target.closest?.("[data-open][role='link']");
  if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); go(el.dataset.open); }
});

// Theme (storage can be blocked, so it is wrapped).
function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}
let savedTheme = null;
try { savedTheme = localStorage.getItem("portfolioTheme"); } catch (_) {}
applyTheme(savedTheme === "light" ? "light" : "dark");
themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("portfolioTheme", next); } catch (_) {}
});

// Profile photo: fall back to initials if images/profile.jpg is missing.
const photo = document.getElementById("profile-photo");
const photoImg = photo.querySelector("img");
const noPhoto = () => photo.classList.add("no-photo");
photoImg.addEventListener("error", noPhoto);
if (photoImg.complete && !photoImg.naturalWidth) noPhoto();

// LinkedIn: only show when a URL is set.
const li = document.getElementById("linkedinLink");
if (LINKEDIN) { li.href = LINKEDIN; li.hidden = false; }

// Tools strip: loop the chips continuously (clone once for a seamless circle).
const toolList = document.querySelector(".tool-list");
const track = document.createElement("div");
track.className = "tool-track";
track.append(...toolList.children);
[...track.children].forEach(chip => {
  const copy = chip.cloneNode(true);
  copy.setAttribute("aria-hidden", "true");
  track.append(copy);
});
toolList.append(track);

// Space the chips so about 3-4 different tools show at once, at a steady speed.
const TOOL_COUNT = track.children.length / 2;
function layoutTools() {
  const chips = [...track.children].slice(0, TOOL_COUNT);
  const avg = chips.reduce((sum, c) => sum + c.offsetWidth, 0) / TOOL_COUNT;
  const gap = Math.max(16, toolList.clientWidth / 8.5 - avg); // ~3-4 chips in view
  const loopWidth = chips.reduce((sum, c) => sum + c.offsetWidth, 0) + TOOL_COUNT * gap;
  track.style.setProperty("--gap", gap + "px");
  track.style.animationDuration = Math.round(loopWidth / 70) + "s"; // ~70px per second
}
new ResizeObserver(layoutTools).observe(toolList);
layoutTools();

render(location.hash.slice(1) || "home");
