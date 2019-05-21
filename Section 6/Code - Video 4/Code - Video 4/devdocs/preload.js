const electron = require('electron');

// The remote site could use this function
window.sendEvent = (name, data) => {
    electron.ipcRenderer.sendToHost(name, data);
};
