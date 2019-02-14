import sketch from 'sketch';
import sketchDOM from 'sketch/dom';
import UI from 'sketch/ui';
import BrowserWindow from 'sketch-module-web-view';

export default function(context) {
    var win;

    win = new BrowserWindow({});
    win.loadURL(require('../resources/index.html'));
    win.webContents.on('testMessage', function(msg) {
        log('got message');
        UI.message('Got message!');
        win.hide();
    });

    UI.message('Opened window without errors...');
}
