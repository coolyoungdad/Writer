const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu} = electron;



let mainWindow;
//Listen for the app to be ready
app.on('ready', function () {
  //Create new window
  mainWindow = new BrowserWindow({width: 800,height: 800, titleBarStyle:'hidden'});
  //Load html new window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
});