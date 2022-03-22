const{app, BrowserWindow} = require('electron')

const createWindow = () =>{
    const win = new BrowserWindow({
        show: false
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
// Controls videoplayback if focused / unfocused
window.onfocus = () => {
    document.querySelector('.videobg').play();
}
window.onblur = () => {
    document.querySelector('.videobg').pause();
}

