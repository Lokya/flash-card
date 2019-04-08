const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')

let win;
function createWindows() {
  // 创建一个浏览器窗口
  win = new BrowserWindow({
    width: 1000,
    height: 800,
  })

  // 加载react启动的接口数据开发
  // win.loadURL('http://localhost:8990/');
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))


  // 开启调试
  // win.webContents.openDevTools({
  //   mode: 'bottom'
  // })


  // win.loadFile(__dirname+'/index.html');

  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// ready
app.on('ready',createWindows)

app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// todo 解决关闭窗口后再次打开后报错的问题
