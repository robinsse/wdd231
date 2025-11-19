import { showCourseDetails } from "./modal.js";

export function createCourseCard(courses) {
    const gallery = document.querySelector(".container");
    gallery.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("button");
        card.className = "course-button";

        card.classList.add(course.completed ? "completed" : "incomplete");

        card.textContent = `${course.completed ? "✓ " : ""}${course.subject} ${course.number}`;
        card.addEventListener("click", () => showCourseDetails(course));
        gallery.appendChild(card);
    });
}

export function updateTotalCredits(courses) {
    const creditsRequired = document.querySelector('.credits');
    let totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    creditsRequired.innerHTML = `<strong>Total Credits Required:</strong> ${totalCredits}`;
}