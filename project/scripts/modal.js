import { ratings } from "../data/ratings.mjs";

export function showRatingDetails(rating) {
    const modal = document.querySelector('#rating-details');
    modal.innerHTML = '';

    let title = document.createElement('h3');
    let description = document.createElement('p');
    let scenarios = document.createElement('p');

    title.textContent = rating.title;
    description.textContent = `Description: ${rating.description}`;
    scenarios.textContent = `Best for: ${rating.scenarios}`;

    let close = document.createElement('button');
    close.className = "close-button";
    close.textContent = "Close";
    close.addEventListener("click", () => modal.close());

    modal.append(title, description, scenarios, close);
    modal.showModal();
}
