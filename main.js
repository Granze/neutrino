import app from 'app';
import path from 'path';
import BrowserWindow from 'browser-window';
import dialog from 'dialog';
import Menu from 'menu';
import fs from 'fs';
import crashReporter from 'crash-reporter';

crashReporter.start();

export default () => {
  let win = null;

  function getFileContent(file) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      win.send('fileContent', data);
    });
  }

  let template = [
    {
      label: 'RMD',
      submenu: [
        {
          label: 'About RMD',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'CommandOrControl+Q',
          click: function () {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          accelerator: 'CommandOrControl+O',
          click: () => {
            dialog.showOpenDialog({
              title: 'Pick a markdown file to open',
              properties: ['openFile'],
              filters: [{name: 'Markdown', extensions: ['md']}]
            }, filename => {
              if(filename) {
                getFileContent(filename[0]);
              }
            });
          }
        },
        {
          label: 'Save',
          accelerator: 'CommandOrControl+S',
          click: () => {
            dialog.showSaveDialog({
              title: 'Save markdown file',
              filters: [{name: 'Markdown', extensions: ['md']}]
            }, filename => {
              console.log('saved', filename);
            });
          }
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
          click: function () {
            BrowserWindow.getFocusedWindow().reloadIgnoringCache();
          }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'F12',
          click: function () {
            BrowserWindow.getFocusedWindow().toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'Help'
    }
  ];

  let menu = Menu.buildFromTemplate(template);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('ready', () => {
    win = new BrowserWindow({width: 1024, height: 768});
    Menu.setApplicationMenu(menu);

    win.loadUrl(path.join('file://', __dirname, '/index.html'));

    win.on('closed', () => {
      win = null;
    });
  });
};
