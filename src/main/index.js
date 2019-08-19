import { app, ipcMain, Menu } from 'electron';
import * as path from 'path';

import AppStore from './store';
import AppTray from './tray';
import MainWindow from './window/main';

import template from './menu';

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

let mainWindow, store, tray;

app.on('ready', () => {
    mainWindow = new MainWindow();
    store = new AppStore();

    if (app.isPackaged) {
        mainWindow.loadURL(`file://${__dirname}/index.html`);
    } else {
        mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    let iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    let iconPath = path.join(__static, iconName);
    tray = new AppTray(iconPath, mainWindow);
});

ipcMain.on('directory:add', (event, filePaths) => {
    filePaths.forEach(file_path => store.add('watching', file_path));
});
