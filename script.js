alert("Script is connected!");

console.log("Welcome to Roy's Portfolio!");
console.warn("Welcome to Roy's Portfolio!");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Example: Change its background color (great for fixing your dark mode!)
if (container) {
  container.style.backgroundColor = "#1e293b";
  container.style.color = "#f8fafc";
}


// 1. Footer Year
function getCurrentYear() {
  return new Date().getFullYear();
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = getCurrentYear();
}

// 2. Experience Calculator
function calculateExperience(startYear) {
  return new Date().getFullYear() - startYear;
}

const expSpan = document.getElementById("expYears");
if (expSpan) {
  expSpan.textContent = calculateExperience(2020);
}

// 3. Project Table Counter
function updateProjectCount() {
  const rows = document.querySelectorAll('table tbody tr');
  console.log("Total projects:", rows.length);

  const countSpan = document.getElementById("projectCount");
  if (countSpan) {
    countSpan.textContent = rows.length;
  }
}

updateProjectCount();

const tableBody = document.getElementById("projectTableBody");
if (tableBody) {
  const observer = new MutationObserver(updateProjectCount);
  observer.observe(tableBody, { childList: true });
}

// 4. Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }

  alert("Message sent!");
  return false;
}

// Practice Activity 18
const projects = [
  {
    title: "Personal Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "portfolio.png",
    description: "A responsive personal website to showcase my coding projects.",
    featured: true
  },
  {
    title: "Weather Dashboard",
    tech: ["JavaScript", "OpenWeather API", "CSS"],
    image: "weather-app.png",
    description: "A live weather tracker that displays 5-day forecasts by city.",
    featured: false
  },
  {
    title: "Task Manager App",
    tech: ["React", "Node.js", "MongoDB"],
    image: "task-manager.png",
    description: "A full-stack to-do list app with user authentication and deadlines.",
    featured: true
  }
];

console.log(projects);

console.log(projects[1].title);

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  backend: ["Node.js", "Express", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "Docker"]
};

console.log(skills.frontend.length);

skills.backend.push("Python");

console.log(skills.backend); 

const projectsContainer = document.getElementById("projectsContainer");

if (projectsContainer) {
  projects.forEach(function(project) {
    projectsContainer.innerHTML += `
      <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
      </div>
    `;
  });
}

function showRandomProject() {
  const index = Math.floor(Math.random() * projects.length);
  console.log("Today's featured project: " + projects[index].title);
}

showRandomProject();

const rawInput = " Alex Morgan ";

const trimmedInput = rawInput.trim();
console.log(trimmedInput);

const lowerInput = trimmedInput.toLowerCase();
console.log(lowerInput);

const cleanInput = lowerInput.replace(/[0-9]/g, '');
console.log(cleanInput);

const now = new Date();

const readableDate = now.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric"
});

document.getElementById("lastUpdated").textContent = `${readableDate}`;

function showWelcomeMessage() {
  alert("Thanks for exploring my portfolio!");
}

setTimeout(showWelcomeMessage, 5000);

const projectsBox = document.getElementById("projectsContainer");

if (projectsBox) {
  projectsBox.innerHTML = "";

  projects.forEach(function(project) {
  const card = document.createElement("div");
   
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    projectsBox.appendChild(card);
  });
}


const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageInput && charCount) {

  messageInput.addEventListener("input", function() {

    const currentLength = this.value.length;
    charCount.textContent = currentLength;

    if (currentLength > 450) {
      charCount.style.color = "red";
    } else {
      charCount.style.color = "";
    }
  });
}

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {

  sections.forEach(function(section) {
  
    if (window.scrollY >= section.offsetTop - 100) {
      const currentId = section.getAttribute("id");

      menuLinks.forEach(function(link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});