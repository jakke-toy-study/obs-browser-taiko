export interface IPCElectronTest {
    sendMessage: (message: string) => Promise<string>;
}

declare global {
    interface Window {
        electronIPCElectronTest: IPCElectronTest
    }
}