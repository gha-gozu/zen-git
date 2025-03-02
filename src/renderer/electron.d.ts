export interface IElectronAPI {
  sendMessage(message: string): void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
