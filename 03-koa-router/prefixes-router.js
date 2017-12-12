const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router({
  prefix: '/users'
})

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>response to "/users"</h1>'
})

router.get('/:id', async (ctx, next) => {
  ctx.response.body = '<h1>response to "/users/:id"</h1>'
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})