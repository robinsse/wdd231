export function showCourseDetails(course) {
    const modal = document.querySelector('#course-details');
    modal.innerHTML = '';

    let title = document.createElement('h3');
    let name = document.createElement('p');
    let credits = document.createElement('p');
    let certificate = document.createElement('p');
    let description = document.createElement('p');
    let technology = document.createElement('p');

    title.textContent = `${course.subject} ${course.number}`;
    name.textContent = `Name: ${course.title}`;
    credits.textContent = `Credits: ${course.credits}`;
    certificate.textContent = `Certificate: ${course.certificate}`;
    description.textContent = `Description: ${course.description}`;
    technology.textContent = `Technology: ${course.technology.join(', ')}`;

    let close = document.createElement('button');
    close.className = "close-button";
    close.textContent = "Close";
    close.addEventListener("click", () => modal.close());

    modal.append(title, name, credits, certificate, description, technology, close);
    modal.showModal();
}
