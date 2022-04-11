const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state');
const path = require('path')

const createWindow = () => {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    })
    const win = new BrowserWindow({
      width: 401,
      height: 555,
      x: mainWindowState.x,
      y: mainWindowState.y,
      resizable: false,
      frame: false,
      //transparent:true,
      webPreferences: {
        preload: path.join(__dirname, 'preloads/mainWindow.js')
      }
    })
  
    win.loadFile('pages/mainWindow.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})