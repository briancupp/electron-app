const electron = require('electron');
const path = require('path');

const { app, Menu } = electron;

const AppTray = require('./app/tray');
const MainWindow = require('./app/window');

const template = require('./app/menu');
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

let mainWindow, tray;

app.on('ready', () => {
    //app.dock.hide();
    mainWindow = new MainWindow();
    mainWindow.loadFile('./views/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    let iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    let iconPath = path.join(__dirname, 'app', 'assets', iconName);
    tray = new AppTray(iconPath, mainWindow);
});
