import { places } from "../data/places.mjs";
console.log(places);

const showHere = document.querySelector("#todo");

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div');
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);
        const thetitle = document.createElement('h2');
        thetitle.textContent = x.name;
        thecard.appendChild(thetitle);
        const theaddress = document.createElement('p');
        theaddress.textContent = x.address;
        thecard.appendChild(theaddress);
        const thecost = document.createElement('p');
        thecost.textContent = `$${x.cost.toFixed(2)}`;
        thecard.appendChild(thecost);
        const thedescription = document.createElement('p');
        thedescription.textContent = x.description;
        thecard.appendChild(thedescription);

        showHere.appendChild(thecard);
    })
}

displayItems(places);