const { app, BrowserWindow, BrowserView } = require("electron");
const os = require("os");

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
        }).then(() => view.webContents.executeJavaScript(loadProductEditions.toString() + "loadProductEditions();"));
}

function loadProductEditions() {
    // Known product editions. Newer first.
    const productEditions = [
        /*
        [
          "Windows 10 October 2020 Update", [
            ["1880", "Windows 10"]
          ]
        ],
        [
          "Windows 10 October 2020 Update", [
            ["1807", "Windows 10"]
          ]
        ],*/
        [
          "Windows 10 May 2020 Update", [
            ["1626", "Windows 10"]
          ]
        ],
        [
          "Windows 10 November 2019 Update", [
            ["1429", "Windows 10"]
          ]
        ],
        [
          "Windows 10 May 2019 Update", [
            ["1384", "Windows 10"]
          ]
        ],
        /*[
          "Windows 10 May 2019 Update", [
            ["1214", "Windows 10"]
          ]
        ],*/
        [
          "Windows 10 October 2018 Update", [
            ["1203", "Windows 10"]
          ]
        ],/*
        [
          "Windows 10 October 2018 Update", [
            ["1060", "Windows 10"]
          ]
        ],*/
        [
          "Windows 10 April 2018 Update", [
            ["651", "Windows 10"]
          ]
        ],
        [
          "Windows 10 Fall Creators Update", [
            ["484", "Windows 10"]
          ]
        ],
        [
          "Windows 10 Creators Update", [
            ["361", "Windows 10"],
            ["362", "Windows 10 N"],
            ["363", "Windows 10 Single Language"]
          ]
        ],
        [
          "Windows 10 Anniversary Update", [
            ["244", "Windows 10"],
            ["245", "Windows 10 N"],
            ["246", "Windows 10 Single Language"]
          ]
        ],
        [
          "Windows 10 November Update", [
            ["178", "Windows 10"],
            ["182", "Windows 10 KN"],
            ["183", "Windows 10 N"],
            ["184", "Windows 10 Single Language"]
          ]
        ],/*
        [
          "Windows 10 November Update", [
            ["109", "Windows 10"],
            ["114", "Windows 10 KN"],
            ["115", "Windows 10 N"],
            ["116", "Windows 10 Single Language"]
          ]
        ],
        [
          "Windows 10 November Update", [
            ["99", "Windows 10"],
            ["104", "Windows 10 KN"],
            ["105", "Windows 10 N"],
            ["106", "Windows 10 Single Language"]
          ]
        ],*/
        [
          "Windows 10", [
            ["79", "Windows 10"],
            ["80", "Windows 10 KN"],
            ["81", "Windows 10 N"],
            ["82", "Windows 10 Single Language"]
          ]
        ]
        
      ];
      
      let dropdown = document.querySelector("#product-edition");
      
      productEditions.forEach(editionGroup => {
        let optionGroup = document.createElement("optgroup");
        optionGroup.label = editionGroup[0];
        
        editionGroup[1].forEach(edition => {
          let option = document.createElement("option");
          option.value = edition[0];
          option.innerHTML = edition[1];
          
          optionGroup.appendChild(option);
        });
        
        dropdown.appendChild(optionGroup);
        
        let separator = document.createElement("option");
        separator.disabled = "disabled";
        dropdown.appendChild(separator);
      });
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