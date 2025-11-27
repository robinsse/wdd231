const visitsDisplay = document.querySelector(".visits");
let lastVisit = Number(window.localStorage.getItem("lastVisit")) || 0;
const now = Date.now();
const difference = (now - lastVisit) / (1000 * 60 * 60 * 24)
const days = Math.floor(difference);

if (lastVisit === 0) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
else if (difference < 1) {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
}
else {
    visitsDisplay.textContent = `You last visited ${days} days ago.`;
}