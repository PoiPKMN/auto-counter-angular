const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const PORT = 4400;
const fs = require('fs');

let win;

const createWindow = () => {
  setTimeout(() => {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: './src/favicon.ico',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
        sandbox: false,
      }
    });

    win.loadURL(url.format({
      pathname: `localhost:${PORT}`,
      protocol: 'http:',
      slashes: true
    }));

    win.webContents.openDevTools();

    win.on('closed', () => {
      win = null;
    });
  }, 10000);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.handle('getFolders', () => {
  const files = fs.readdirSync('./src/workspace', { withFileTypes: true });
  return files.filter((dir) => !dir.isFile());
});

ipcMain.handle('addWorkspaceFolder', async (_, folderName) => {
  fs.mkdirSync('./src/workspace/' + folderName, { recursive: true });
});
