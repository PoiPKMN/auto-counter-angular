const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let wins = new Map();

const gHeight = 600;
const gWidth = 800;

const createWindow = (windowId, extendedPath) => {
  const newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'favicon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
    autoHideMenuBar: true,
  });

  newWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html/' + extendedPath),
    protocol: 'file:',
    slashes: true
  }));

  newWindow.on('closed', () => {
    wins.delete(windowId);
  });
  wins.set(windowId, newWindow);
}

app.on('ready', () => createWindow('mainWindow', '', gHeight, gWidth));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow('mainWindow', '', gHeight, gWidth);
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
