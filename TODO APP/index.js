let todoIndex = 1;

function addTodo(){
    const element = document.getElementById("todoInput")
    const todo = element.value;
    if(todo === ""){
        return; 
    }
    element.value = "";

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id","todo" + todoIndex);

    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan    )

    const todoButton = document.createElement("button")
    todoButton.innerHTML = "Delete todo";
    todoButton.setAttribute = ("onClick","deleteTodo(" + todoIndex + ")");
    
    todoDiv.appendChild(todoButton)

    document.getElementById("todos").appendChild(todoDiv)
    todoIndex = todoIndex + 1;
}

function deleteTodo(index){
    const divElement = document.getElementById("todo" + index);
    document.getElementById("todos").removeChild(divElement);
    
    
}