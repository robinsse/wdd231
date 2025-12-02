import { memberships } from "../data/memberships.mjs";
import { showMembershipDetails } from "./modal.js";

document.getElementById('form').addEventListener('submit', () => {
    const ts = document.getElementById('timestamp')
    if (ts) ts.value = new Date().toLocaleString();
});

function createMembershipCards() {
    const gallery = document.querySelector("#cards");
    gallery.innerHTML = "";

    memberships.forEach(membership => {
        const card = document.createElement("section");
        const name = document.createElement('h3');
        name.textContent = membership.title;
        const details = document.createElement("button");
        details.className = "details";
        details.textContent = "See details"
        details.addEventListener("click", () => showMembershipDetails(membership));
        card.append(name, details);
        gallery.append(card);
    });
}

createMembershipCards();

