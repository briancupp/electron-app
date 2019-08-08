const electron = require('electron');
const { app, Menu, Tray } = electron;

class AppTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);

        this.mainWindow = mainWindow;
        this.setToolTip(app.getName());

        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onContext.bind(this));
    }

    onClick(event, bounds) {
        if (this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        } else {
            this.mainWindow.show();
        }
    }

    onContext() {
        const menu = Menu.buildFromTemplate([{ role: 'quit' }]);
        this.popUpContextMenu(menu);
    }
}

module.exports = AppTray;
