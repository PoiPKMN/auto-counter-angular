const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const PORT = 4400;
const fs = require('fs');
const { keysIn } = require('lodash');

let wins = new Map();

const gHeight = 600;
const gWidth = 800;

const createWindow = (windowId, extendedPath, height, width, timeout) => {
  setTimeout(() => {
    const newWindow = new BrowserWindow({
      width: width,
      height: height,
      icon: './src/favicon.ico',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
        sandbox: false,
      }
    });

    newWindow.loadURL(url.format({
      pathname: `localhost:${PORT}/` + extendedPath,
      protocol: 'http:',
      slashes: true
    }));

    newWindow.webContents.openDevTools();

    newWindow.on('closed', () => {
      wins.delete(windowId);
    });
    wins.set(windowId, newWindow);
  }, timeout);
}

app.on('ready', () => createWindow('mainWindow', '', gHeight, gWidth, 10000));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow('mainWindow', '', gHeight, gWidth, 10000);
  }
});

ipcMain.handle('getFolders', () => {
  const files = fs.readdirSync('./src/workspace', { withFileTypes: true });
  return files.filter((dir) => !dir.isFile());
});

ipcMain.handle('addWorkspaceFolder', async (_, folderName) => {
  fs.mkdirSync('./src/workspace/' + folderName, { recursive: true });
});

ipcMain.handle('createBrowserWindow', (_, path) => {
  const { screen } = require('electron');
  const { height, width } = screen.getPrimaryDisplay().workAreaSize
  createWindow((keysIn(wins).length + 1).toString(), path, height, width, 0);
});
