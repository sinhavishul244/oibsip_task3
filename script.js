const inputEL = document.querySelector("#tempinp");
const selectEl = document.querySelector("#selectel");
const outputEl = document.querySelector("#outputel");

const clickHandler = () => {
    console.log(selectEl.value);
    if (selectEl.value === 'celcius') {
        const tempInFahrenheit = ((inputEL.value * 9) / 5) + 32;
        outputEl.value = `${tempInFahrenheit} Farenheit`
    } else {
        const tempInCelcius = ((inputEL.value - 32) * 5) / 9;
        outputEl.value = `${tempInCelcius} Celcius`
    }
}