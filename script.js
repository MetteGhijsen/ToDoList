let todoItem = document.getElementById("textbox");
let todoItems = [""];

function AddItem(){
    let content = todoItem.value;
    console.log(content);

    for(let i=0; i<todoItems.length; i++){
        todoItems[i] = todoItem.value;
    }
}