const{app, BrowserWindow, dialog} = require('electron')

let todoItems = [];

const createWindow = () =>{
    const win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.maximize();
    win.show();
    win.loadFile('index.html')

}
// Create the window when app is ready
app.whenReady().then(() =>{
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// deal with app closure
app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin') app.quit()
})

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = ((h + 11) % 12 + 1);
    let suffix = h <= 12 ? "PM" : "AM"
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " " + suffix;
    setTimeout(startTime, 1000);
    setTimeout(startDate, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function startDate(){
    const today = new Date();
    const daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let weekday = today.getDay();

    const date = document.getElementById('dateformat');
    const day = document.getElementById('day');
    date.innerHTML = `${m+1}/${d}/${y}`;
    day.innerHTML = daysOfWeek[weekday-1];

}

function addToDo(text){
    const todo = {
        text,
        checked: false,
    };
    todoItems.push(todo);
    displayItems(todoItems);
}

function onSubmit(event){
    alert('test');
    event.preventDefault();
    const input = $('#todolist');
    const text = input.ariaValueMax.trim();
    if (text !== '') {
        addToDo(text);
        input.value = '';
        input.focus();
    }
}

window.onfocus = () => {
    $('.videobg').get(0).play();
}
window.onblur = () => {
    $('.videobg').get(0).pause();
}