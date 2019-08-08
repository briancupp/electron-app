const developer = require('./developer');
const osx = require('./osx');

const menuTemplate = [{ role: 'windowMenu' }];

if (process.platform === 'darwin') {
    menuTemplate.unshift({ label: 'Application', submenu: osx });
}

if (process.env.NODE_ENV !== 'production') {
    menuTemplate.push({ label: 'Developer', submenu: developer });
}

module.exports = menuTemplate;
