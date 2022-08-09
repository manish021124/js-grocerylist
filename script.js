const btn = document.getElementById('btn');
console.log("hey");
btn.addEventListener("click", getInput);

function getInput(){
    let input = entry.elements[0].value;
    console.log(input);
}