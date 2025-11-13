const today = new Date();
const dt = Math.floor(today.getTime() / 1000);

const url = 'api.openweathermap.org/data/2.5/forecast?lat=43.8231799546703&lon=-111.79256932226771&units=imperial&appid=53bdcbc858527ddf08e742cc1431d61c';
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}