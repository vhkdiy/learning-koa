const Koa = require('koa')
const app = new Koa()

//中间件
app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello World!</h1>'
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})