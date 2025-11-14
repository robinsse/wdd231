const url = 'https://robinsse.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

const displayDirectory = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        name.textContent = business.name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone}`;
        website.textContent = business.website;
        website.setAttribute('href', business.website);
        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);
        cards.appendChild(card);
    });
}

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    displayDirectory(data.businesses);
}
getDirectoryData();

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