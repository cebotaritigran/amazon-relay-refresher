/* THIS FILE NEEDS MORE DOCUMENTATION */

// button to turn on and off the refresher
let turnOnOffButton = document.createElement('button');
let topBody = document.querySelector('.base-container__navigation-bar')
topBody.appendChild(turnOnOffButton)
turnOnOffButton.innerText = 'ON';
turnOnOffButton.setAttribute("value", "off");
let getAttributeElement = turnOnOffButton.getAttribute('value');

// randomizer to randomize intervals between refreshers
/* There is one problem with this is initially its 500 and when you click on without changing randomizer number it doesn't randomize
the intervals so later it needs fixing */
let randomizerInput = document.createElement('input');
randomizerInput.setAttribute("type", "tel")
randomizerInput.setAttribute("value", 500);
randomizerInput.setAttribute("class", "test");
topBody.appendChild(randomizerInput);


// randomizer interval that i stole from one of stackoverflow answers
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


//clicks the refresh button on the bottom of the page
function refresh() {
    if (document.querySelector('.css-10ebv51') !== null) {
        but = document.querySelector(".css-10ebv51");
        but.click();
        console.log("clicked")
    }
}



let interval;
let maxvalue = 1000;
//getting input from the html element
randomizerInput.addEventListener("input", () => {
    let valueElement = randomizerInput.value
    randomizerInput.setAttribute("value", valueElement);
    maxvalue = randomizerInput.value;
})

maxvalue = parseInt(maxvalue, 10);

//turning on and off the refresher
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





