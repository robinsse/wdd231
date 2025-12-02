import { displayDirectory } from './directory.js';

const url = 'https://robinsse.github.io/wdd231/chamber/data/members.json';
const featuredContainer = document.querySelector('#featured');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const businesses = data.businesses
            const eligible = businesses.filter(
                b => b.membershipLevel === 1 || b.membershipLevel === 2);
            const featured = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);
            displayDirectory(featured, featuredContainer);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch();
