const electron = require('electron');
const path = require('path');

const windows = {};

electron.app.on('ready', () => {
  windows.main = new electron.BrowserWindow({
    width: 600,
    height: 400
  });

  windows.main.loadURL(`file://${path.join(__dirname, 'index.html')}`);

  windows.main.on('closed', () => {
    delete windows.main;
  });
});

electron.app.on('window-all-closed', electron.app.quit);
