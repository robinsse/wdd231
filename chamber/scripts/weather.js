const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82293225465049&lon=-111.79308439711642&units=imperial&appid=53bdcbc858527ddf08e742cc1431d61c';
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp.toFixed(0)}`;
    humidity.textContent = `${data.main.humidity.toFixed(0)}`;
    windSpeed.textContent = `${data.wind.speed.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
}

apiFetch();
