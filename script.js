const btn = document.getElementById("btn");
// let input;

btn.addEventListener("submit", addItem);

function addItem(){
    // getInput();
    // displayInput();
    let input = document.getElementById('entry').elements.value;
    document.getElementById("list").innerHTML = input;


}

// function getInput(){
//     input = document.getElementById('entry').elements.value;
// }

// function displayInput(){
//     document.getElementById("list").innerHTML = input;
// }