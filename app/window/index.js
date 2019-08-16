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

/**
 * @class Window
 * @extends BrowserWindow
 * @description Custom Window class so that we can establish a set of
 * default behavour.
 */
class Window extends BrowserWindow {
    constructor(options = {}) {
        super({ ...DEFAULT_OPTIONS, ...options });

        // Show the window once it's ready
        this.on('ready-to-show', () => {
            this.show();
            this.focus();
        });

        // Manage the close window flow
        this.on('close', this.onClose.bind(this));

        // Manage visibility state
        this.on('hide', this.hideIcon.bind(this));
        this.on('show', this.showIcon.bind(this));
    }

    /**
     * Checks to see if the `isQuitting` flag is set, which is only set
     * when triggered from an Application level quit. Closing the window
     * will instead trigger a hide.
     * @param {Event} event The Electron event
     * @returns {boolean} Whether the event quit early, or properly
     */
    onClose(event) {
        if (!isQuitting) {
            event.preventDefault();
            this.hide();
            return false;
        }

        return true;
    }

    /**
     * Checks the status of the window, if it was minimized then keep
     * the dock/taskbar icon visible. If actually hidden, then properly
     * hide the dock/taskbar icons.
     * @param {Event} event The Electron event
     * @returns {boolean} Whether the event quit early, or properly
     */
    hideIcon(event) {
        if (this.isMinimized()) {
            // Don't trigger hide when minimized.
            event.preventDefault();
            return false;
        }

        if (!this.isVisible()) {
            app.dock && app.dock.hide(); // OSX
            this.setSkipTaskbar(true); // Windows
        }

        return true;
    }

    /**
     * Checks the visibility status of the window and shows the
     * dock/taskbar icon if it is.
     *@returns {boolean}
     */
    showIcon() {
        if (this.isVisible()) {
            app.dock && app.dock.show(); // OSX
            this.setSkipTaskbar(false); // Windows
        }

        return true;
    }
}

module.exports = Window;
