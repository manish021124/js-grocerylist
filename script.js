const btn = document.getElementById("btn");
let input;

btn.addEventListener("submit", addItem);

function addItem(){
    Event.preventDefault();
    getInput();
    displayInput();
}

function getInput(){
    input = document.getElementById('entry').elements.value;
}

function displayInput(){
    document.getElementById("list").innerHTML = input;
}