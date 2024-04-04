import {BrowserWindow, dialog, ipcMain} from 'electron';

const registerIpcHandles = (win: BrowserWindow) => {

    ipcMain.handle('selectDirectory', async (event, arg) => {
        const result = await dialog.showOpenDialog(win, {
            properties: ['openDirectory']
        });
        console.log('selectDirectory', result.filePaths[0] || null);
        return result.filePaths[0] || null;
    });

};

export {registerIpcHandles};
