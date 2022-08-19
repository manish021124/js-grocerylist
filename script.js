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
    //create div
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    //add text
    const text = document.createTextNode(input);
    //create i
    const iEdit = document.createElement("i");
    const iDelete = document.createElement("i");
    //for new class
    const edit = iEdit.classList;
    const del = iDelete.classList;

    const list = document.getElementById("list");

    div1.appendChild(text);
    div2.appendChild(iEdit);
    div3.appendChild(iDelete);
    list.appendChild(div1);
    list.appendChild(div2);
    list.appendChild(div3);

    edit.add("fa-solid");
    edit.add("fa-pen-to-square");
    del.add("fa-solid");
    del.add("fa-trash");

    //delete item
    iDelete.addEventListener("click", deleteList);
    //edit item
    // iEdit.addEventListener("click", editList);

    function deleteList(){
        div1.remove();
        div2.remove();
        div3.remove();
    }

//     function editList(){
//         input = text;
//     }
}