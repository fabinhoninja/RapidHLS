import { app, BrowserWindow, ipcMain, shell, dialog } from 'electron'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    backgroundColor: '#09090b',
    show: false,
  })

  mainWindow.once('ready-to-show', () => mainWindow.show())

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  ipcMain.on('minimize-window', () => mainWindow.minimize())
  ipcMain.on('close-window', () => mainWindow.close())
  ipcMain.on('open-external', (_, url: string) => {
    shell.openExternal(url)
  })
  ipcMain.handle('open-file-dialog', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
      title: 'Select FFMPEG Installation Directory'
    })
    return result.canceled ? null : result.filePaths[0]
  })
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
