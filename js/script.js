// =========================
// ELEMENTOS DOM
// =========================
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const slides = document.querySelectorAll(".slide");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// =========================
// MENÚ MOBILE
// =========================
function initMenu() {
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

// =========================
// NAVBAR SHRINK
// =========================
function initNavbar() {
    if (!nav) return;

    window.addEventListener("scroll", () => {
        nav.classList.toggle("shrink", window.scrollY > 80);
    });
}

// =========================
// CARRUSEL
// =========================
function initCarousel() {
    if (slides.length === 0) return;

    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
}

// =========================
// COUNTDOWN
// =========================
function initCountdown() {
    const targetDate = new Date("May 31, 2026 13:00:00").getTime();

    const countdown = setInterval(() => {
        const now = Date.now();
        const diff = targetDate - now;

        if (diff <= 0) {
            clearInterval(countdown);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.innerText = days;
            hoursEl.innerText = hours;
            minutesEl.innerText = minutes;
            secondsEl.innerText = seconds;
        }
    }, 1000);
}

// =========================
// PROGRESS BAR
// =========================
function initProgressBar() {
    const input = document.getElementById("inputProgress");
    const bar = document.getElementById("progressBar");
    const btn = document.getElementById("btnProgress");

    if (!input || !bar || !btn) return;

    btn.addEventListener("click", () => {
        const value = Number(input.value);

        if (isNaN(value) || value < 0 || value > 100) {
            alert("Introduce un número entre 0 y 100");
            return;
        }

        bar.style.width = value + "%";
    });
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initNavbar();
    initCarousel();
    initCountdown();
    initProgressBar();
});