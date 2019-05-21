const electron = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');
const path = require('path');

// Setup logger
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

// Setup updater events
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for updates...');
});

autoUpdater.on('update-available', (info) => {
  console.log('Update available');
  console.log('Version', info.version);
  console.log('Release date', info.releaseDate);
});

autoUpdater.on('update-not-available', () => {
  console.log('Update not available');
});

autoUpdater.on('download-progress', (progress) => {
  console.log(`Progress ${Math.floor(progress.percent)}`);
});

autoUpdater.on('update-downloaded', (info) => {
  console.log('Update downloaded');
  autoUpdater.quitAndInstall();
});

autoUpdater.on('error', (error) => {
  console.error(error);
});

const windows = {};

electron.app.on('ready', () => {

  // Trigger update check
  if (!isDev) {
    autoUpdater.checkForUpdates();
  }

  windows.main = new electron.BrowserWindow({
    width: 450,
    height: 200,
    show: false
  });

  windows.main.loadURL(`file://${path.join(__dirname, 'index.html')}`);

  windows.main.on('ready-to-show', () => {
    windows.main.show();
  });

  windows.main.on('closed', () => {
    delete windows.main;
  });
});

electron.app.on('window-all-closed', electron.app.quit);
