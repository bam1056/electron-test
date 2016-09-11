const { app, BrowserWindow, ipcMain } = require("electron")
const os = require('os')

app.on("ready", () => {
  let win = new BrowserWindow({
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  })
  win.loadURL(`file://${__dirname}/index.html`)
})

app.on("window-all-closed", app.quit)

ipcMain.on('get-cpus', (event) => {
  event.sender.send('cpu-details', JSON.stringify(os.cpus(), null, 2))
})
