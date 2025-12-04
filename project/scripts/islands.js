const url = 'https://robinsse.github.io/wdd231/project/data/islands.json';
const islandsContainer = document.querySelector('#islands');

const islands = [
    { name: "Oahu", lat: 21.4389, lon: -158.0001 },
    { name: "Maui", lat: 20.7984, lon: -156.3319 },
    { name: "Kauai", lat: 22.0964, lon: -159.5261 },
    { name: "Hawaii (Big Island)", lat: 19.5429, lon: -155.6659 },
    { name: "Lanai", lat: 20.8275, lon: -156.9255 },
    { name: "Molokai", lat: 21.1440, lon: -157.0223 }
];

const apiKey = '53bdcbc858527ddf08e742cc1431d61c';
async function getWeatherData(lat, lon, temp, icon, description) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            temp.textContent = `Temperature: ${data.main.temp.toFixed(0)} °F`;
            const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const descText = data.weather[0].description;
            icon.setAttribute('src', iconsrc);
            icon.setAttribute('alt', descText);
            description.textContent = descText.toUpperCase();

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayIslands = (islandsData) => {
    islandsData.forEach((item) => {
        let island = document.createElement('section');
        let title = document.createElement('h3');
        let description = document.createElement('p');

        const weatherDiv = document.createElement('div');
        weatherDiv.classList.add('weather-info');

        const weatherTitle = document.createElement('h4');
        weatherTitle.textContent = 'Current Weather';

        const icon = document.createElement('img');
        const desc = document.createElement('p');
        const temp = document.createElement('p');

        title.innerHTML = `<strong>${item.title}</strong>`;
        description.textContent = item.description;

        island.appendChild(title);
        island.appendChild(description);
        island.appendChild(weatherDiv);

        weatherDiv.appendChild(weatherTitle);
        weatherDiv.appendChild(temp);
        weatherDiv.appendChild(icon);
        weatherDiv.appendChild(desc);

        islandsContainer.appendChild(island);
        const islandInfo = islands.find(i => i.name === item.title);
        if (islandInfo) {
            getWeatherData(islandInfo.lat, islandInfo.lon, temp, icon, desc);
        }
    });
}

async function getIslandData() {
    const response = await fetch(url);
    const data = await response.json();
    displayIslands(data.islands);
}
getIslandData();