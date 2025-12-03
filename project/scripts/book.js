import { ratings } from "../data/ratings.mjs";
import { showRatingDetails } from "./modal.js";

document.getElementById('form').addEventListener('submit', () => {
    const ts = document.getElementById('timestamp')
    if (ts) ts.value = new Date().toLocaleString();
});

function createRatingCards() {
    const gallery = document.querySelector("#cards");
    gallery.innerHTML = "";

    ratings.forEach(rating => {
        const card = document.createElement("section");
        const name = document.createElement('h3');
        name.textContent = rating.title;
        const details = document.createElement("button");
        details.className = "details";
        details.textContent = "See details"
        details.addEventListener("click", () => showRatingDetails(rating));
        card.append(name, details);
        gallery.append(card);
    });
}

createRatingCards();

