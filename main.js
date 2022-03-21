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

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin') app.quit()
})