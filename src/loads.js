let getAllLoadsButton = document.createElement('button');

topBody.appendChild(getAllLoadsButton)
getAllLoadsButton.innerText = 'Get all loads';

getAllLoadsButton.addEventListener("click", () => {
    console.log(document.querySelectorAll('.css-ly5121 .css-5wftrk'));
})