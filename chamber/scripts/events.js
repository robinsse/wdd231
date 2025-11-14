const url = 'https://robinsse.github.io/wdd231/chamber/data/events.json';
const eventsContainer = document.querySelector('#events');

const displayEvents = (eventsData) => {
    eventsData.forEach((item) => {
        let event = document.createElement('section');
        let title = document.createElement('p');
        let description = document.createElement('p');
        let dateTime = document.createElement('p');
        let location = document.createElement('p');

        title.innerHTML = `<strong>${item.title}</strong>`;
        description.textContent = item.description;
        dateTime.textContent = `${item.date} @ ${item.time}`;
        location.textContent = item.location;

        event.appendChild(title);
        event.appendChild(description);
        event.appendChild(dateTime);
        event.appendChild(location);

        eventsContainer.appendChild(event);
    });
}

async function getEventData() {
    const response = await fetch(url);
    const data = await response.json();
    displayEvents(data.events);
}
getEventData();