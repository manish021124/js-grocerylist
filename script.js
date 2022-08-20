const btn = document.getElementById("btn");
const nameValue = document.getElementById("name");
const list= document.getElementById("list");
const reset = document.getElementById("reset");
const notification = document.getElementById("notification");
const message = document.getElementById("message");
let input;
let editMode = 0;

document.getElementById('entry').addEventListener("submit", addItem);
btn.addEventListener("click", notify);
reset.addEventListener('click', resetItem);
//remove notification after certain period
setInterval(disappearNotification, 3000);

function notify(){
    if(editMode == 1){
        editedNotification();
    }else{
        addedNotification();
    }
}

function addItem(e){
    e.preventDefault();
    getInput();
}

function getInput(){
    input = nameValue.value;
    if(nameValue.value != ''){
        displayInput();
    }else{
        errorNotification();
    }
    setDefault();
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
    iEdit.addEventListener("click", Edit);

    function deleteList(){
        div1.remove();
        div2.remove();
        div3.remove();
    }

    function Edit(){
        editMode = 1;
        nameValue.value = text.textContent;
        deleteList();
        btn.addEventListener("click", notify);
    }

    //visibility of clear all on each click of trash
    iDelete.addEventListener('click', resetVisibilityCheck);
    //normal visibility check
    resetVisibilityCheck();
    //delete notification
    iDelete.addEventListener('click', deletedNotification);
    editMode = 0;
}

function setDefault(){
    nameValue.value = '';
}

function resetVisibilityCheck(){
    if(list.children.length != 0){
        reset.style.visibility = "visible";
    }else{
        reset.style.visibility = "hidden";
    }
}

function resetItem(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    resetVisibilityCheck();
    resetNotification();
}

function errorNotification(){
    notification.style.visibility = "visible";
    message.innerHTML = "Please Enter value";
    message.style.backgroundColor = "rgb(248, 39, 39)";
    message.style.boxShadow = "0 2px 6px 0 rgb(248, 39, 39), 0 3px 15px 0 rgb(248, 39, 39)";
}

function addedNotification(){
    notification.style.visibility = "visible";
    message.innerHTML = "Item added";
    message.style.backgroundColor = "rgb(59, 245, 90)";
    message.style.boxShadow = "0 2px 6px 0 rgb(59, 245, 90), 0 3px 15px 0 rgb(59, 245, 90)";
}

function deletedNotification(){
    notification.style.visibility = "visible";
    message.innerHTML = "Item deleted";
    message.style.backgroundColor = "rgb(248, 39, 39)";
    message.style.boxShadow = "0 2px 6px 0 rgb(248, 39, 39), 0 3px 15px 0 rgb(248, 39, 39)";
}

function editedNotification(){
    notification.style.visibility = "visible";
    message.innerHTML = "Item edited";
    message.style.backgroundColor = "rgb(62, 62, 252)";
    message.style.boxShadow = "0 2px 6px 0 rgb(62, 62, 252), 0 3px 15px 0 rgb(62, 62, 252)";
}

function resetNotification(){
    notification.style.visibility = "visible";
    message.innerHTML = "Cleared all";
    message.style.backgroundColor = "rgb(248, 39, 39)";
    message.style.boxShadow = "0 2px 6px 0 rgb(248, 39, 39), 0 3px 15px 0 rgb(248, 39, 39)";
}

function disappearNotification(){
    notification.style.visibility = "hidden";
}