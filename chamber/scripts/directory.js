const url = 'https://robinsse.github.io/wdd231/chamber/data/members.json';

export function createBusinessCard(business) {
    const card = document.createElement('section');

    const name = document.createElement('h3');
    name.textContent = business.name;

    const address = document.createElement('p');
    address.textContent = `Address: ${business.address}`;

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${business.phone}`;

    const website = document.createElement('a');
    website.textContent = business.website
    website.setAttribute('href', business.website);

    const logo = document.createElement('img');
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo of ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

    card.append(name, address, phone, website, logo);
    return card;
}

export function displayDirectory(businesses, container) {
    container.innerHTML = '';
    businesses.forEach(b => container.appendChild(createBusinessCard(b)));
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
        displayDirectory(data.businesses, cards);

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