/* =========================================================
   LATIKA TALEKAR — PORTFOLIO
   SCRIPT.JS
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    number: "01",
    title: "RAG-Based AI Chatbot",
    type: "AI Practice",
    description:
      "An AI-powered chatbot built around retrieval-augmented generation concepts. The project explores document retrieval, embeddings, vector search and generating responses using relevant context.",
    tech: [
      "Python",
      "LLM",
      "RAG",
      "Embeddings",
      "Vector Database",
      "REST API"
    ]
  },

  {
    number: "02",
    title: "MCP Inventory Checker",
    type: "AI Practice",
    description:
      "A Python-based inventory checking experiment exploring MCP concepts, structured data and API-driven workflows.",
    tech: [
      "Python",
      "MCP",
      "REST APIs",
      "JSON"
    ]
  },

  {
    number: "03",
    title: "Webhook Automation System",
    type: "Automation Practice",
    description:
      "An automation project designed around webhooks and REST APIs for receiving events, processing structured data and triggering application workflows.",
    tech: [
      "Python",
      "REST API",
      "Webhooks",
      "JSON",
      "Postman"
    ]
  },

  {
    number: "04",
    title: "Food Delivery Website",
    type: "Personal Practice",
    description:
      "A food delivery web application concept focused on restaurant browsing, food discovery and a responsive frontend experience.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ]
  },

  {
    number: "05",
    title: "Travel Discovery Application",
    type: "Personal Practice · Ongoing",
    description:
      "A travel-focused application exploring destination discovery, responsive interfaces and structured travel information.",
    tech: [
      "React",
      "Bootstrap",
      "MongoDB"
    ]
  },

  {
    number: "06",
    title: "Weather Application",
    type: "Personal Practice",
    description:
      "A responsive weather application that retrieves real-time weather information through an external API and presents it through a simple interface.",
    tech: [
      "HTML5",
      "Bootstrap",
      "JavaScript",
      "OpenWeather API"
    ]
  }
];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectList = document.getElementById("projectList");

const projectDialog = document.getElementById("projectDialog");

const dialogClose = document.getElementById("dialogClose");

const dialogTitle = document.getElementById("dialogTitle");

const dialogDescription =
  document.getElementById("dialogDescription");

const dialogType =
  document.getElementById("dialogType");

const dialogTech =
  document.getElementById("dialogTech");

const menuButton =
  document.getElementById("menuButton");

const mobileNav =
  document.getElementById("mobileNav");

const yearElement =
  document.getElementById("year");


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {

  if (!projectList) {
    return;
  }

  projectList.innerHTML = "";

  projects.forEach((project, index) => {

    const projectItem =
      document.createElement("article");

    projectItem.className = "project-item";

    projectItem.setAttribute("tabindex", "0");

    projectItem.setAttribute(
      "role",
      "button"
    );

    projectItem.setAttribute(
      "aria-label",
      `View ${project.title} project`
    );


    projectItem.innerHTML = `

      <span class="project-number">
        ${project.number}
      </span>

      <div class="project-info">

        <h3>
          ${project.title}
        </h3>

        <p>
          ${project.type}
        </p>

      </div>

      <span class="project-arrow">
        ↗
      </span>

    `;


    projectItem.addEventListener(
      "click",
      () => openProject(index)
    );


    projectItem.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openProject(index);

        }

      }
    );


    projectList.appendChild(projectItem);

  });

}


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProject(index) {

  const project = projects[index];

  if (!project) {
    return;
  }


  if (dialogTitle) {

    dialogTitle.textContent =
      project.title;

  }


  if (dialogDescription) {

    dialogDescription.textContent =
      project.description;

  }


  if (dialogType) {

    dialogType.textContent =
      project.type;

  }


  if (dialogTech) {

    dialogTech.innerHTML = "";

    project.tech.forEach((technology) => {

      const tag =
        document.createElement("span");

      tag.textContent =
        technology;

      dialogTech.appendChild(tag);

    });

  }


  if (
    projectDialog &&
    typeof projectDialog.showModal === "function"
  ) {

    projectDialog.showModal();

    document.body.classList.add(
      "dialog-open"
    );

  }

}


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

function closeProject() {

  if (!projectDialog) {
    return;
  }


  if (projectDialog.open) {

    projectDialog.close();

  }


  document.body.classList.remove(
    "dialog-open"
  );

}


/* =========================================================
   MODAL EVENTS
========================================================= */

if (dialogClose) {

  dialogClose.addEventListener(
    "click",
    closeProject
  );

}


if (projectDialog) {

  projectDialog.addEventListener(
    "click",
    (event) => {

      const rect =
        projectDialog.getBoundingClientRect();

      const clickedInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;


      if (!clickedInside) {

        closeProject();

      }

    }
  );


  projectDialog.addEventListener(
    "cancel",
    () => {

      document.body.classList.remove(
        "dialog-open"
      );

    }
  );


  projectDialog.addEventListener(
    "close",
    () => {

      document.body.classList.remove(
        "dialog-open"
      );

    }
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

  if (!menuButton || !mobileNav) {
    return;
  }


  const isOpen =
    mobileNav.classList.toggle("active");


  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );


  document.body.classList.toggle(
    "menu-open",
    isOpen
  );

}


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

if (menuButton) {

  menuButton.addEventListener(
    "click",
    toggleMobileMenu
  );

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

if (mobileNav) {

  const mobileLinks =
    mobileNav.querySelectorAll("a");


  mobileLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        mobileNav.classList.remove(
          "active"
        );


        if (menuButton) {

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }


        document.body.classList.remove(
          "menu-open"
        );

      }
    );

  });

}


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );


if (
  "IntersectionObserver" in window &&
  sections.length &&
  navLinks.length
) {

  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const currentId =
            entry.target.getAttribute("id");


          navLinks.forEach((link) => {

            const href =
              link.getAttribute("href");


            link.classList.toggle(
              "active",
              href === `#${currentId}`
            );

          });

        });

      },
      {
        threshold: 0.25,
        rootMargin: "-20% 0px -60% 0px"
      }
    );


  sections.forEach((section) => {

    sectionObserver.observe(section);

  });

}


/* =========================================================
   SMOOTH ANCHOR FALLBACK
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================================
   CURRENT YEAR
========================================================= */

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }


    if (
      projectDialog &&
      projectDialog.open
    ) {

      closeProject();

    }


    if (
      mobileNav &&
      mobileNav.classList.contains("active")
    ) {

      mobileNav.classList.remove(
        "active"
      );


      if (menuButton) {

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }


      document.body.classList.remove(
        "menu-open"
      );

    }

  }
);


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProjects();

  }
);