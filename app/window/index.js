const electron = require('electron');
const { app, BrowserWindow } = electron;

const DEFAULT_OPTIONS = {
    width: 600,
    height: 400,
    resizable: false,
    show: false,
    title: app.getName(),
    webPreferences: {
        backgroundThrottling: false
    }
};

// Only allow quitting of the application from the context menu's.
let isQuitting = false;
app.on('before-quit', () => (isQuitting = true));

class Window extends BrowserWindow {
    constructor(options = {}) {
        super({ ...DEFAULT_OPTIONS, ...options });

        this.on('close', event => {
            if (!isQuitting) {
                event.preventDefault();
                this.hide();
                return false;
            }

            return true;
        });

        this.on('hide', () => {
            console.log('window hidden');
            app.dock.hide();
        });

        this.on('minimize', event => {
            event.preventDefault();
            this.hide();
        });

        this.on('ready-to-show', () => {
            this.show();
            this.focus();
        });

        this.on('show', () => {
            app.dock.show();
        });
    }
}

module.exports = Window;
