const path = require('path')
const ip = require('ip')
const staticFiles = require('koa-static')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const sendJson = require('./send-json')
const miLog = require('./mi-log')
const miHttpError = require('./mi-http-error')

module.exports = (app) => {
    app.use(miHttpError({
        errorPageFolder: path.resolve(__dirname, '../errorPage')
    }))
    app.use(miLog({
        env: app.env,  // koa 提供的环境变量
        projectName: 'koa2-tutorial',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()
    }))
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

      // 增加错误的监听处理
    app.on("error", (err, ctx) => {
        if (ctx && !ctx.headerSent && ctx.status < 500) {
            ctx.status = 500
        }
        if (ctx && ctx.log && ctx.log.error) {
            if (!ctx.state.logged) {
                ctx.log.error(err.stack)
            }
        }
  })
}