const electron = require('electron');
const { app } = electron;

const menuTemplate = [{ role: 'windowMenu' }];

if (process.platform === 'darwin') {
    // Only load this module for OSX
    const osx = require('./osx');
    menuTemplate.unshift({ label: 'Application', submenu: osx });
}

if (!app.isPackaged) {
    // Only load this module for development
    const developer = require('./developer');
    menuTemplate.push({ label: 'Developer', submenu: developer });
}

module.exports = menuTemplate;
