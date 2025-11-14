const url = 'https://robinsse.github.io/wdd231/chamber/data/events.json';
const eventsContainer = document.querySelector('#events');

const displayEvents = (eventsData) => {
    eventsData.forEach((item) => {
        let event = document.createElement('section');
        let title = document.createElement('h3');
        let description = document.createElement('p');
        let date = document.createElement('p');
        let time = document.createElement('p');
        let location = document.createElement('p');

        title.textContent = item.title;
        description.textContent = item.description;
        date.textContent = item.date;
        time.textContent = item.time;
        location.textContent = item.location;

        event.appendChild(title);
        event.appendChild(description);
        event.appendChild(date);
        event.appendChild(time);
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