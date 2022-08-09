const btn = document.getElementById('btn');
let input;

btn.addEventListener("click", addItem);

function addItem(){
    getInput();
    displayInput();
    console.log('hey');
}

function getInput(){
    input = entry.elements[0].value;
}

function displayInput(){
    document.getElementById('list').innerHTML = input;
}