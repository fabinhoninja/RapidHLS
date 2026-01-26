export interface ElectronAPI {
  minimizeWindow: () => void
  closeWindow: () => void
  openExternal: (url: string) => void
  openFileDialog: () => Promise<string | null>
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI
  }
}

export {}
