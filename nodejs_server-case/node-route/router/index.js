const fs = require('fs')

function render(res, path, type = '') {
  res.writeHead(200, {
    'Content-Type': `${type ? type : 'text/html'};charset=utf8`
  })
  res.write(fs.readFileSync(path), 'utf-8')
  res.end()
}

// 3、静态处理函数
function readStaticFile(req, res) {
  const myURL = new URL(req.url, 'http://127.0.0.1:3000')
  // 使用绝对路径、mime包
  const pathname = path.join(__dirname, '/static/', myURL.pathname)

  // 对pathname路径处理
  if (myURL.pathname === '/') return false

  // 处理静态资源
  if (fs.existsSync(pathname)) {
    // Content-Type类型自动识别（需要扩展名文件）
    console.log(mime.getType(myURL.pathname.split('.')[1]))
    render(res, pathname, mime.getType(myURL.pathname.split('.')[1]))
    return true
  } else {
    return false
  }
}

const router = {
  '/home': (req, res) => {
    render(res, './page/home.html')
  },
  '/login': (req, res) => {
    render(res, './page/login.html')
  },
  '/404': (req, res) => {
    // 1、🚩静态资源处理
    if (readStaticFile(req, res)) {
      return
    }

    // 2、非静态资源处理
    res.writeHead(404, {
      'Content-Type': 'text/html;charset=utf8'
    })
    res.write(fs.readFileSync('./static/404.html'), 'utf-8')
    res.end()
  }
}

module.exports = router
