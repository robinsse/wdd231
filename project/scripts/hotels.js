const url = 'https://robinsse.github.io/wdd231/project/data/hotels.json';

export function createHotelCard(hotel) {
    const card = document.createElement('section');

    const name = document.createElement('h3');
    name.textContent = hotel.name;

    const address = document.createElement('p');
    address.textContent = `Address: ${hotel.address}`;

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${hotel.phone}`;

    const website = document.createElement('a');
    website.textContent = hotel.website
    website.setAttribute('href', hotel.website);

    const image = document.createElement('img');
    image.setAttribute('src', hotel.image);
    image.setAttribute('alt', `Image of ${hotel.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '300');
    image.setAttribute('height', '200');

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${hotel.rating} stars`;

    card.append(name, address, phone, website, rating, image);
    return card;
}

export function displayDirectory(hotels, container) {
    container.innerHTML = '';
    hotels.forEach(b => container.appendChild(createHotelCard(b)));
}

export async function getDirectoryData() {
    const response = await fetch(url);
    return response.json();
}

const cards = document.querySelector('#cards');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

if (cards && gridButton && listButton) {
    (async () => {
        const data = await getDirectoryData();
        displayDirectory(data.hotels, cards);

        gridButton.addEventListener('click', () => {
            cards.classList.add('grid-view');
            cards.classList.remove('list-view');
            gridButton.classList.add('active');
            listButton.classList.remove('active');
        });

        listButton.addEventListener('click', () => {
            cards.classList.add('list-view');
            cards.classList.remove('grid-view');
            listButton.classList.add('active');
            gridButton.classList.remove('active');
        });
    })();
}