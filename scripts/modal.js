export function showCourseDetails(course) {
    const modal = document.querySelector('#course-details');
    modal.innerHTML = '';

    let title = document.createElement('h3');
    let name = document.createElement('p');
    let credits = document.createElement('p');
    let certificate = document.createElement('p');
    let description = document.createElement('p');
    let technology = document.createElement('p');

    title.textContent = `${courses.subject} ${courses.number}`;
    name.textContent = `${courses.title}`;
    credits.textContent = `Credits: ${courses.credits}`;
    certificate.textContent = `Certificate: ${courses.certificate}`;
    description.textContent = `Description: ${courses.description}`;
    technology.textContent = `Technology: ${courses.technology}`;

    let close = document.createElement('button');
    close.className = "close-button";
    close.textContent = "Close";
    close.addEventListener("click", () => modal.close());

    modal.append(title, name, credits, certificate, description, technology, close);
    modal.showModal();
}
