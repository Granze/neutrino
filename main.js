var app = require('app');
var BrowserWindow = require('browser-window');
var dialog = require('dialog');
var Menu = require('menu');
var fs = require('fs');


require('crash-reporter').start();

var mainWindow = null;

function getFileContent(file) {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

var template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CommandOrControl+O:',
        click: function () {
          dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [{name: 'Markdown', extensions: ['md']}]
          }, function (filename) {
            console.log('file', filename);
            getFileContent(filename[0]);
          });
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'CommandOrControl+Q',
        click: function() { app.quit(); }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CommandOrControl+Z',
        selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CommandOrControl+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'CommandOrControl+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'CommandOrControl+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'CommandOrControl+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'CommandOrControl+A',
        selector: 'selectAll:'
      }
    ]
  },
  {
    label: 'Dev',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CommandOrControl+R',
        click: function() { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'F12',
        click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); }
      }
    ]
  },
  {
    label: 'Help',
    submenu: [{
      label: 'About RMD',
      selector: 'orderFrontStandardAboutPanel:'
    }]
  }
];

var menu = Menu.buildFromTemplate(template);

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768});
  Menu.setApplicationMenu(menu);

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
