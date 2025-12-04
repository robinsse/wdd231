

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
}

apiFetch();
