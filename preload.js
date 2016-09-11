const ipcRenderer = require('electron').ipcRenderer

global.onMainMessage = ipcRenderer.on.bind(ipcRenderer)
global.sendToMain= ipcRenderer.send.bind(ipcRenderer)
