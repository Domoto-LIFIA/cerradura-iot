const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

const app = electron.app
var win = null
var win2 = null

app.on('ready',() => {
    win = new BrowserWindow({width:800, height:600})
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))
})

exports.openWindow = (filename) => {
    win2 = new BrowserWindow({width:800, height:600})
    win2.loadURL(url.format({
        pathname: path.join(__dirname, filename),
        protocol: 'file:',
        slashes: true
      }))

}