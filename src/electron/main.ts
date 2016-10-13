const electron = require('electron');
// Module to control application life
const {app} = electron;
// Module to create native browser window
const {BrowserWindow} = electron;
const {onceUponMain} = electron;

// global reference to the window
let win;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // No menu
  win.setMenu(null);

  // Load main page
  win.loadURL(`file://${__dirname}/../../index.html`);

  // Open dev tools (?)
  // win.webContents.openDevTools();

 // Emitted on closing window
 win.on('closed', () => {
   win = null;
 });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});