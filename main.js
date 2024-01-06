let button = document.getElementById("add");
let todolist = document.getElementById("todoList");
let input = document.getElementById("input");

//* localStorage
let aray = [];

window.onload = () => {
    localStorage.getItem(aray)
}

button.addEventListener('click', () => {
    aray.push(input.value);
    addtodo(input.value);
    input.value = ""
});


function addtodo(paraVal) {
    let para = document.createElement("p");
    para.innerText = paraVal;
    todolist.appendChild(para);
    localStorage.setItem('aray', JSON.stringify(aray));

    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through";
        // remove(paraVal);
    });

    para.addEventListener("dblclick", () => {
        todolist.removeChild(para);
        remove(paraVal);
    });
}

function remove(paraVal) {
    let index = aray.indexOf(paraVal);
    if (index > -1) {
        aray.splice(index, 1);
    }
    localStorage.setItem('aray', JSON.stringify(aray))
}


for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}