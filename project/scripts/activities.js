import { places } from "../data/places.mjs";
console.log(places);

const showHere = document.querySelector("#gallery");

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div');
        thecard.classList.add("thecard");
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);
        const thetitle = document.createElement('h2');
        thetitle.textContent = x.name;
        thecard.appendChild(thetitle);
        const theisland = document.createElement('p');
        theisland.textContent = `Island: ${x.island}`;
        theisland.classList.add("a");
        thecard.appendChild(theisland);
        const thecost = document.createElement('p');
        thecost.textContent = `Cost: ${x.cost}`;
        thecost.classList.add("c");
        thecard.appendChild(thecost);
        const thedescription = document.createElement('p');
        thedescription.textContent = x.description;
        thedescription.classList.add("d");
        thecard.appendChild(thedescription);

        showHere.appendChild(thecard);
    })
}

displayItems(places);