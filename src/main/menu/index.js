import { app } from 'electron';

import osx from './osx';
import developer from './developer';

const menuTemplate = [{ role: 'windowMenu' }];

if (process.platform === 'darwin') {
    // Only load this module for OSX
    menuTemplate.unshift({ label: 'Application', submenu: osx });
}

if (!app.isPackaged) {
    // Only load this module for development
    menuTemplate.push({ label: 'Developer', submenu: developer });
}

export default menuTemplate;
