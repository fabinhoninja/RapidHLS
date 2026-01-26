import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  closeWindow: () => ipcRenderer.send('close-window'),
  openExternal: (url: string) => ipcRenderer.send('open-external', url),
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
})
