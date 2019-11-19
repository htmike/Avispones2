
const electron = require('electron')
const { app, BrowserWindow, Menu } = require('electron')

electron.app.on('browser-window-created', (e,window) => {
    let menu = new Menu();
    window.setMenuBarVisibility(false);
});

let win;

function createWindow() {
    win = new BrowserWindow({
        fullscreenable: true,
        width: 384,
        height: 550,
        backgroundColor: '#111',
    });
    win.loadURL('http://localhost:4200/')
    win.setMenuBarVisibility(false)
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
