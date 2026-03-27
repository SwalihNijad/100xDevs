let todoIndex = 1;

function addTodo() {
    //Write the code that reads the contents of the input box
    //Creates a new todo on the html dom
        //step1 - Create a new div element in js as variable
        //step2- insert that div element to parent div
    // clears the input box

    // const element = document.getElementById("todoInput") 
    // const todo = element.value;

    // const newDiv = document.createElement("div")
    // newDiv.innerHTML = "<span>" + todo + "</span> <button> Delete Todo </button>";

    // const parentDiv = document.getElementById("todos")
    // parentDiv.appendChild(newDiv);

//or

    const element = document.getElementById("todoInput") 
    const todo = element.value;
    if(todo === ""){
        return;
    }
    element.value ="";

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", "todo" + todoIndex);

    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan    )

    const todoButton = document.createElement("button")
    todoButton.innerHTML = "Delete todo"
    todoButton.setAttribute("onClick", "deleteTodo(" +  todoIndex + ")");

    todoDiv.appendChild(todoButton)

    document.getElementById("todos").appendChild(todoDiv)
    todoIndex = todoIndex + 1;
}
function deleteTodo(index){
    const divElement = document.getElementById("todo" + index);
    document.getElementById("todos").removeChild(divElement);
}