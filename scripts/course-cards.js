import { courses } from "./courses.js";
import { showCourseDetails } from "./modal.js";

function createCourseCard(courses) {
    const gallery = document.querySelector(".container");
    gallery.innerHTML = "";

    courses.forEach(course => {
        let card = document.createElement("button");
        card.className = "course-button";
        if (!course.completed) {
            card.textContent = `${course.subject} ${course.number}`;
            card.style.backgroundColor = "#800";
            card.style.color = "#fff";
            gallery.appendChild(card);
            card.addEventListener("click", () => {
                showCourseDetails(course);
            })
        }
        else {
            card.textContent = `✓ ${course.subject} ${course.number}`;
            card.style.backgroundColor = "#eee";
            card.style.color = "#444444";
            gallery.appendChild(card);
            card.addEventListener("click", () => {
                showCourseDetails(course);
            })
        }
    })
};

function updateTotalCredits(courses) {
    const creditsRequired = document.querySelector('.credits');
    let totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    creditsRequired.innerHTML = `<strong>Total Credits Required:</strong> ${totalCredits}`;
}