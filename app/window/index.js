const electron = require('electron');
const { app, BrowserWindow } = electron;

const DEFAULT_OPTIONS = {
    width: 600,
    height: 400,
    maximizable: false,
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

        this.on('hide', this.hideIcon.bind(this));

        this.on('ready-to-show', () => {
            this.show();
            this.focus();
        });

        this.on('show', this.showIcon.bind(this));
    }

    hideIcon(event) {
        if (this.isMinimized()) {
            // Don't trigger hide when minimized.
            event.preventDefault();
            return false;
        }

        if (!this.isVisible()) {
            app.dock.hide(); // OSX
            this.setSkipTaskbar(true); // Windows
        }
    }

    showIcon() {
        if (this.isVisible()) {
            app.dock.show(); // OSX
            this.setSkipTaskbar(false); // Windows
        }
    }
}

module.exports = Window;
