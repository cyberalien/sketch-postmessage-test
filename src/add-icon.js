import UI from 'sketch/ui';
import BrowserWindow from 'sketch-module-web-view';

export default function(context) {
    var win;

    win = new BrowserWindow({
        // even without these options result is the same
        identifier: 'test2-window-' + Date.now(),
        width: 800,
        height: 800,
        show: true
    });
    win.loadURL(require('../resources/index.html'));

    win.webContents.on('nativeLog', function(s) {
        sketch.UI.message(s);
    });
}
