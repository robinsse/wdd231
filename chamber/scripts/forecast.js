const today = new Date();
const todayDt = Math.floor(today.getTime() / 1000);
const tomorrowDt = todayDt + 86400;
const dayAfterDt = todayDt + 2 * 86400;
const todayTemp = document.querySelector('#today');
const tomorrowTemp = document.querySelector('#tomorrow');
const dayAfterTemp = document.querySelector('#day-after');
const todayWeather = document.querySelector('#today-weather');
const tomorrowWeather = document.querySelector('#tomorrow-weather');
const dayAfterWeather = document.querySelector('#day-after-weather');

const url = '//api.openweathermap.org/data/2.5/forecast?lat=43.8231799546703&lon=-111.79256932226771&units=imperial&appid=53bdcbc858527ddf08e742cc1431d61c';
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
    data.list.forEach((forecast) => {
        if (forecast.dt >= todayDt && forecast.dt < todayDt + 86400) {
            todayTemp.textContent = `${forecast.main.temp.toFixed(0)} °F`;
            todayWeather.textContent = forecast.weather[0].main;
        } else if (forecast.dt >= tomorrowDt && forecast.dt < tomorrowDt + 86400) {
            tomorrowTemp.textContent = `${forecast.main.temp.toFixed(0)} °F`;
            tomorrowWeather.textContent = forecast.weather[0].main;
        } else if (forecast.dt >= dayAfterDt && forecast.dt < dayAfterDt + 86400) {
            dayAfterTemp.textContent = `${forecast.main.temp.toFixed(0)} °F`;
            dayAfterWeather.textContent = forecast.weather[0].main;
        }
    });
}

apiFetch();