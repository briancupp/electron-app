import { app, Menu } from 'electron';
import * as path from 'path';

import AppTray from './tray';
import MainWindow from './window/main';

import template from './menu';

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

let mainWindow, tray;

app.on('ready', () => {
    mainWindow = new MainWindow();

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
