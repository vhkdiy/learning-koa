const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get(
  '/users/:id',
  async (ctx, next) => {
    ctx.response.body = '<h1>user page</h1>'
    ctx.user = { id: 3, name: 'xiaowang' }
    await next()
  },
  async (ctx) => {
    console.log(ctx.user)
  }
)

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})