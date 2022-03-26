const { Quill } = require("quill");

    var npad = new Quill('#npad', {modules:{
        toolbar: true
    },
        placeholder: 'Enter your notes here!',
        theme: 'snow'
    })
    
document.addEventListener("DOMContentLoaded",function(e){
    let todoItems = [];
    
    function renderToDo(todo){
        const list = document.getElementById('#tasks');
        const isChecked = todo.checked ? 'done': '';
        const listNode = document.createElement("li");
        listNode.setAttribute('class', `todo-item ${isChecked}`);
        listNode.setAttribute('data-key', todo.id);
        listNode.innerHTML = `
        <input id="${todo.id}" type= "checkbox"/>
        <span>${todo.text}</span>`;
        
        list.append(listNode);
    }
    
    
    function addToDo(text){
        const todo = {
            text,
            checked: false,
            id: Date.now()
        };    
        todoItems.push(todo);
        renderToDo(todo);
    }    
    

    // $('#tdtitle').on('submit',function(e){
    //     alert('y')
    //     // e.preventDefault();
    //     const input = document.getElementById('todolist');
    //     const text = input.value.trim();
    //     if (text !== '') {
    //         addToDo(text);
    //         input.value = '';
    //         input.on('focus');
    //     }    
    // })    
})