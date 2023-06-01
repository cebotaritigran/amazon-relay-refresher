let turnOnOffButton = document.createElement('button');
let topBody = document.querySelector('.base-container__navigation-bar')
topBody.appendChild(turnOnOffButton)
turnOnOffButton.innerText = 'ON';
turnOnOffButton.setAttribute("value", "off");
let getAttributeElement = turnOnOffButton.getAttribute('value');

let randomizerInput = document.createElement('input');
randomizerInput.setAttribute("type", "tel")
randomizerInput.setAttribute("value", 500);
randomizerInput.setAttribute("class", "test");
topBody.appendChild(randomizerInput);

const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
    let timeout;

    const runInterval = () => {
        const timeoutFunction = () => {
            intervalFunction();
            runInterval();
        };

        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        console.log(delay)
        timeout = setTimeout(timeoutFunction, delay);
    };

    runInterval();

    return {
        clear() { clearTimeout(timeout) },
    };
};


function refresh() {
    if (document.querySelector('.css-10ebv51') !== null) {
        but = document.querySelector(".css-10ebv51");
        but.click();
        console.log("clicked")
    }
}



let interval;
let maxvalue = 1000;
randomizerInput.addEventListener("input", () => {
    let valueElement = randomizerInput.value
    randomizerInput.setAttribute("value", valueElement);
    maxvalue = randomizerInput.value;
})

maxvalue = parseInt(maxvalue, 10);

turnOnOffButton.addEventListener("click", () => {
    getAttributeElement = turnOnOffButton.getAttribute('value');
    if (getAttributeElement == "off") {
        turnOnOffButton.setAttribute("value", "on");
        turnOnOffButton.innerText = 'OFF';

        console.log(maxvalue)
        interval = setRandomInterval(() => refresh(), 1000, maxvalue);
    } else {
        turnOnOffButton.setAttribute("value", "off");
        turnOnOffButton.innerText = 'ON';
        interval.clear();
    }
})

