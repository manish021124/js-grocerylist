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
    const div = document.createElement("div");
    const text = document.createTextNode(input);
    const i = document.createElement("i");
    const edit = document.createAttribute("fa-solid fa-pen-to-square");
    const list = document.getElementById("list");

    div.appendChild(text);
    i.appendChild(edit);
    div.appendChild(i);
    list.appendChild(div);
}