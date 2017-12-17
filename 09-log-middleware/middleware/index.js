const path = require('path')
const staticFiles = require('koa-static')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const sendJson = require('./send-json')
const miLog = require('./mi-log')

module.exports = (app) => {
    app.use(miLog())
    app.use(staticFiles(path.resolve(__dirname, "../public"))) // 设置静态资源目录
    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),// 指定视图目录
        nunjucksConfig: {
            trimBlocks: true // 开启转义 防Xss
        }
    }))

    app.use(bodyParser())
    app.use(sendJson())
}