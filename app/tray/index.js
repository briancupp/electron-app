const electron = require('electron');
const { app, Menu, Tray } = electron;

/**
 * @class AppTray
 * @extends Tray
 * @description Custom Tray class so that we can establish a set of
 * default behavour.
 */
class AppTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);

        this.setIgnoreDoubleClickEvents(true);

        this.mainWindow = mainWindow;
        this.setToolTip(app.getName());

        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onContext.bind(this));
    }

    /**
     * Checks the visible state of the Application window, toggles
     * between the visible state.
     */
    onClick() {
        if (this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        } else {
            this.mainWindow.show();
        }
    }

    /**
     * Creates a dynamic context menu, with some options being based
     * on the visibility state of the Application.
     */
    onContext() {
        const toggleLabel = () => {
            if (this.mainWindow.isVisible()) {
                return `Hide ${app.getName()}`;
            } else {
                return `Show ${app.getName()}`;
            }
        };

        const menu = Menu.buildFromTemplate([
            { label: toggleLabel(), click: this.onClick.bind(this) },
            { role: 'quit' }
        ]);

        this.popUpContextMenu(menu);
    }
}

module.exports = AppTray;
