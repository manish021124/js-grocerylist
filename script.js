const btn = document.getElementById("btn");
let input;

document.getElementById('entry').addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();
    getInput();
    displayInput();
}

function getInput(){
    input = document.getElementById('name').value;
    console.log(input);
}

function displayInput(){
    document.getElementById("list").innerHTML = input;
}