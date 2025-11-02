function createCourseCard(courses) {
    const gallery = document.querySelector(".container");
    gallery.innerHTML = "";

    courses.forEach(course => {
        let card = document.createElement("button");
        if (!course.completed) {
            card.textContent = `${course.subject} ${course.number}`;
            card.style.backgroundColor = "#800";
            card.style.color = "#fff";
            gallery.appendChild(card);
        }
        else {
            card.textContent = `✓ ${course.subject} ${course.number}`;
            card.style.backgroundColor = "#eee";
            card.style.color = "#444444";
            gallery.appendChild(card);
        }
    })
};

function updateTotalCredits(courses) {
    const creditsRequired = document.querySelector('.credits');
    let totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    creditsRequired.innerHTML = `<strong>Total Credits Required:</strong> ${totalCredits}`;
}