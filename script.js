// DARK MODE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
};

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

// TYPING EFFECT
const text = ["Frontend Developer", "React Developer", "UI Designer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// PROJECT FILTER
function filterProjects(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  observer.observe(sec);
});

// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return;
  }

  if (!email.includes("@")) {
    alert("Invalid email");
    return;
  }

  if (message.length < 10) {
    alert("Message too short");
    return;
  }

  alert("Message Sent Successfully 🚀");
});

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "#000";
  } else {
    nav.style.background = "#333";
  }
});
