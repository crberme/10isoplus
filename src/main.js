const { app, BrowserWindow, BrowserView } = require("electron");
const os = require("os");
const fs = require("fs");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let options = null;
    if (os.platform == "win32") {
        options = {
            userAgent: win.webContents.getUserAgent().replace(new RegExp("\\(.+?\\)"), "(X11; Linux x86_64)")
        };
    }

    const view = new BrowserView();
    view.webContents.loadURL("https://www.microsoft.com/software-download/windows10ISO", options)
        .then(() => {
            win.setBrowserView(view);

            let winSize = win.getSize();
            view.setBounds({
                x: 0,
                y: 0,
                width: (winSize[0] - 16),
                height: (winSize[1] - 58)
            });
            view.setAutoResize({
                width: true,
                height: true
            });
        }).then(() => fs.readFile("src/10isoplus.user.js", "UTF-8", (err, data) => {
          if (err) {
            console.log(err);
            return;
          }

          view.webContents.executeJavaScript(data);
        }));
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})