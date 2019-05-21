const electron = require('electron');
const path = require('path');

let win;

electron.app.on('ready', () => {
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  });

  win.loadURL(`file://${path.join(__dirname, 'index.html')}`);

  win.on('closed', () => {
    win = null;
  });
});

electron.app.on('window-all-closed', electron.app.quit);
