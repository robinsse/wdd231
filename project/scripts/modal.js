import { memberships } from "../data/memberships.mjs";

export function showMembershipDetails(membership) {
    const modal = document.querySelector('#membership-details');
    modal.innerHTML = '';

    let title = document.createElement('h3');
    let cost = document.createElement('p');
    let benefits = document.createElement('p');

    title.textContent = membership.title;
    cost.textContent = `Cost: $${membership.cost}`;
    benefits.textContent = `Benefits: ${membership.benefits}`;

    let close = document.createElement('button');
    close.className = "close-button";
    close.textContent = "Close";
    close.addEventListener("click", () => modal.close());

    modal.append(title, cost, benefits, close);
    modal.showModal();
}
