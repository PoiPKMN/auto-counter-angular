const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'mainApi', {
    getFolders: () => ipcRenderer.invoke('getFolders'),
    addWorkspaceFolder: (folderName) => ipcRenderer.invoke('addWorkspaceFolder', folderName),
  }
);
