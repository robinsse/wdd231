const url = 'https://robinsse.github.io/wdd231/project/data/islands.json';
const islandsContainer = document.querySelector('#islands');

const displayIslands = (islandsData) => {
    islandsData.forEach((item) => {
        let island = document.createElement('section');
        let title = document.createElement('h3');
        let description = document.createElement('p');

        title.innerHTML = `<strong>${item.title}</strong>`;
        description.textContent = item.description;

        island.appendChild(title);
        island.appendChild(description);

        islandsContainer.appendChild(island);
    });
}

async function getIslandData() {
    const response = await fetch(url);
    const data = await response.json();
    displayIslands(data.islands);
}
getIslandData();